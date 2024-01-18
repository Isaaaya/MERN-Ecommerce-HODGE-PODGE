const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.listUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password -wishlist').lean();
    res.status(200).json(users);
});

exports.getUserProfile = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id).select('-password -createdAt -updatedAt -__v -wishlist');
    res.status(200).json(user);
})

exports.updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { firstName, lastName, email } = req.body;

    await User.findByIdAndUpdate(_id, {
        $set: { firstName, lastName, email }
    }, { new: true }).select('-password');

    res.status(200).json({ firstName, lastName, email })
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndDelete(_id);
    res.clearCookie('jwt', {
        httpOnly: true,
        secure: true,
    })
    res.status(200).json({ msg: 'User deleted' })
});


exports.getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const wishlist = await User.findById(_id).select('wishlist').populate({ path: 'wishlist', select: 'title productCollection images price', populate: { path: 'productCollection', select: 'title' } });
    res.status(200).json(wishlist);
});


exports.getCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const cart = await User.findById(_id).select('cart -_id').populate({ path: 'cart.products.product', select: 'title price images quantity' });
    res.status(200).json(cart.cart);
})
