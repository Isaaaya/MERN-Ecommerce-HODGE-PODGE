const { check, validationResult } = require('express-validator');
const User = require('../models/User');


module.exports = validateSignin = [
    check('email')
        .trim().exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .isEmail().withMessage('Email must be valid').bail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (!user) {
                return Promise.reject();
            }
        })
        .withMessage('The email is not signed up')
        .bail(),
    check('password')
        .trim().exists({ checkFalsy: true }).withMessage('Password is required').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
]   