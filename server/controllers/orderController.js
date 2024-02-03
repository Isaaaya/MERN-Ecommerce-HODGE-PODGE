const mongoose = require('mongoose');
const { Order, Product, User } = require('../models/index');
const asyncHandler = require('express-async-handler');
const { transporter } = require('../utils/transporter');
const fs = require('fs');
const handlebars = require('handlebars');

const templateSource = fs.readFileSync('emails/orderDetailsLetter.hbs', 'utf-8');

const template = handlebars.compile(templateSource);

exports.listOrders = asyncHandler(async (req, res) => {
    const query = req.query.search || '';
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = req.query.limit || 10;
    const skip = limit * page;
    const filter = { userEmail: { $regex: query, $options: 'i' } };

    if (mongoose.isValidObjectId(query)) {
        const orders = [await Order.findById(query)];
        res.status(200).json({ orders, totalPages: 1 });
    };

    const orders = await Order.find(filter).skip(skip).limit(limit);

    const totalOrders = await Order.countDocuments(filter);
    const totalPages = Math.ceil(totalOrders / limit);

    res.status(200).json({ orders, totalOrders, page, totalPages });
});


exports.createOrder = asyncHandler(async (req, res) => {
    const { userEmail, products, shippingDetails } = req.body;
    let totalItems = 0;
    let totalPrice = 0;
    let productsFullInfo = [];

    for (const item of products) {
        totalItems += item?.quantity;
        const cartProduct = await Product.findById(item.product);

        productsFullInfo = [...productsFullInfo, { product: cartProduct.toObject(), quantity: item?.quantity }];
        totalPrice += cartProduct?.price * item?.quantity;

        cartProduct.quantity = cartProduct.quantity - item?.quantity;
        await cartProduct.save();

    };

    const newOrder = await Order.create({ userEmail, products, totalItems, totalPrice, shippingDetails });
    transporter.sendMail({
        to: userEmail,
        from: '11pz@ukr.net',
        subject: 'Your order has been confirmed!',
        template: 'orderDetailsLetter',
        html: template({
            _id: newOrder._id,
            productsFullInfo,
            creationDate: newOrder?.createdAt,
            totalPrice,
        }),
    });

    await User.findOneAndUpdate({ email: userEmail }, {
        cart: {}
    });
    res.status(201).json(newOrder);
});


exports.getOrderById = asyncHandler(async (req, res) => {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
})