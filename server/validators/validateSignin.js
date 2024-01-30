const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const validateSignin = [
    check('email')
        .trim().exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .escape()
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
        .trim().exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .matches(/^[a-zA-Z0-9_]+$/).withMessage('Password can contain only letters, numbers and underscore')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
]

module.exports = validateSignin;