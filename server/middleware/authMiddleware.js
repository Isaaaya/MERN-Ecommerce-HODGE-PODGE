const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.isAuthenticated = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const { userId } = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(userId).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Unauthorized, invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Unauthorized, no token');
    }

});

exports.isAdmin = asyncHandler(async (req, res, next) => {
    if (req.user?.isAdmin) {
        res.status(200);
        next();
    } else {
        res.status(401);
        throw new Error('Forbidden, You Are Not an Admin');
    }
})