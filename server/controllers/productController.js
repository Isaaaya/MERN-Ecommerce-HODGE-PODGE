const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const { Product, User } = require('../models/index');


exports.listProducts = asyncHandler(async (req, res) => {
    const { productCollection, category, subcategory, price, sort, search, available, images } = req.query;

    const query = search || '';

    if (mongoose.isValidObjectId(query)) {
        const products = [await Product.findById(query).populate('productCollection category subcategory', 'title').select('-__v -description -extraDetails -features').lean()];

        return res.status(200).json({ products });
    };

    const page = parseInt(req.query.page) - 1 || 0;
    const limit = req.query.limit || 3;
    const skip = limit * page;
    const filter = { title: { $regex: query, $options: 'i' } };

    if (productCollection) {
        filter.productCollection = productCollection;
    };
    if (category) {
        filter.category = category;
    };
    if (subcategory) {
        filter.subcategory = subcategory;
    };

    if (available?.length === 1) {
        if (available[0] === 'inStock') {
            filter.quantity = { $gt: 0 }
        } else filter.quantity = { $lt: 1 }
    }

    if (images?.length === 1) {
        if (images[0] === 'images') {
            filter[`images.0`] = { "$exists": true }
        } else filter[`images.1`] = { "$exists": false }

    };

    const getSortingType = () => {
        switch (sort) {
            case 'az': return { title: 1 };
            case 'za': return { title: -1 };
            case 'lowHigh': return { price: 1 };
            case 'highLow': return { price: -1 };
            case 'oldNew': return { createdAt: 1 };
            case 'newOld': return { createdAt: -1 };
        };
    };

    const initialProducts = await Product.find(filter);

    const maxPrice = Math.max(...initialProducts.map(product => product.price));
    const minPrice = Math.min(...initialProducts.map(product => product.price));

    if (price) {
        filter.price = {
            $lte: price
        }
    }

    const products = await Product.find(filter).skip(skip).limit(limit).collation({ locale: "en" }).sort(getSortingType()).populate('productCollection category subcategory', 'title').select('-__v -description -extraDetails -features').lean();

    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limit);


    res.status(200).json({ products, totalProducts, page, totalPages, maxPrice, minPrice });
});


exports.getProductById = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId).populate('productCollection category subcategory', 'title');
    res.status(200).json(product);
})

exports.createProduct = asyncHandler(async (req, res) => {
    const { title, description, extraDetails, features, price, quantity, images, productCollection, category, subcategory } = req.body;

    const newProduct = await Product.create({ title, description, price, quantity, extraDetails, features, images, productCollection, category, subcategory });

    res.status(201).json(newProduct);
});

exports.updateProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { title, description, extraDetails, features, price, quantity, images, productCollection, category, subcategory } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, {
        $set: { title, description, extraDetails, features, price, quantity, images, productCollection, category, subcategory }
    }, { new: true });

    res.status(200).json(updatedProduct);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json(deletedProduct);
});

exports.addToWishlist = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.params;

    const product = await Product.findById(productId);
    await User.findByIdAndUpdate(userId, {
        $push: { wishlist: product._id }
    })
    res.status(200).json(product);
});


exports.removeOneFromWishlist = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.params;

    const product = await Product.findById(productId);
    await User.findByIdAndUpdate(userId, {
        $pull: { wishlist: product._id }
    })
    res.status(200).json(product);
});


exports.addToCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { productId } = req.params;

    const product = await Product.findById(productId);

    const findInCart = () => {
        for (const item of user?.cart?.products) {
            if (item.product.toString() === productId) return user.cart.products.indexOf(item);
        };
        return -1;
    };

    if (findInCart() >= 0) {
        const itemIndex = findInCart();
        user.cart.products[itemIndex].quantity++
    } else {
        user.cart.products = [...user.cart.products, { product: product._id, quantity: 1 }];
    };

    await user.save();
    res.status(200).json(user.cart);
});


exports.removeOneFromCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { productId } = req.params;

    const product = await Product.findById(productId);

    const findInCart = () => {
        for (const item of user?.cart?.products) {
            if (item.product.toString() === productId) return user.cart.products.indexOf(item);
        };
        return -1;
    };

    if (findInCart() >= 0) {
        const itemIndex = findInCart();
        if (user.cart.products[itemIndex].quantity > 1) user.cart.products[itemIndex].quantity--;
        else {
            const filteredProducts = user.cart.products.filter((item) => item.product.toString() !== productId);
            user.cart.products = filteredProducts;
        };
    } else {
        res.status(404);
        throw new Error('No such product in the cart');
    };

    user.cart.totalItems = (user.cart.totalItems || 0) - 1;
    user.cart.totalPrice = (user.cart.totalPrice || 0) - product.price;

    await user.save();
    res.status(200).json(user.cart);
});


exports.removeManyFromCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { productId, productQuantityInCart } = req.params;

    const product = await Product.findById(productId);

    const findInCart = () => {
        for (const item of user?.cart?.products) {
            if (item.product.toString() === productId) return user.cart.products.indexOf(item);
        };
        return -1;
    };

    if (findInCart() >= 0) {
        const filteredProducts = user.cart.products.filter((item) => item.product.toString() !== productId);
        user.cart.products = filteredProducts;
    } else {
        res.status(404);
        throw new Error('No such product in the cart');
    };

    user.cart.totalItems = (user.cart.totalItems || 0) - productQuantityInCart;
    user.cart.totalPrice = (user.cart.totalPrice || 0) - (product.price * productQuantityInCart);

    await user.save();
    res.status(200).json(user.cart);
});