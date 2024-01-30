const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.signup = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });
    user.generateToken(res, user._id);

    res.status(201).json({ firstName, lastName, email, createdAt: user.createdAt });
});

exports.signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (await user.comparePasswords(password)) {
        user.generateToken(res, user._id);
        res.status(200).json({ firstName: user.firstName, lastName: user.lastName, email, createdAt: user.createdAt });
    } else {
        res.status(401);
        throw new Error('Invalid password');
    }
});

exports.signout = asyncHandler(async (req, res) => {
    res.clearCookie('jwt', {
        httpOnly: true,
        secure: true,
    })
    res.status(200).json({ msg: 'User logged out' })
});




