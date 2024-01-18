const { check, validationResult } = require('express-validator');
const User = require('../models/User');


module.exports = validateSignup = [
    check('firstName')
        .trim().exists({ checkFalsy: true }).withMessage('First name is required').bail()
        .isLength({ min: 2, max: 30 }).withMessage('First name must be between 2 and 30 characters').bail()
        .matches(/^[A-Za-z\s]+$/).withMessage('First name must be alphabetic').bail(),
    check('lastName')
        .trim().exists({ checkFalsy: true }).withMessage('Last name is required').bail()
        .isLength({ min: 2, max: 30 }).withMessage('Last name must be between 2 and 30 characters').bail()
        .matches(/^[A-Za-z\s]+$/).withMessage('Last name must be alphabetic').bail(),
    check('email')
        .trim().exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .isEmail().withMessage('Email must be valid').bail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (user) {
                return Promise.reject();
            }
        })
        .withMessage('Email is already taken')
        .bail(),
    check('password')
        .trim().exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .isLength({ min: 3, max: 30 }).withMessage('Password must be between 3 and 30 characters')
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