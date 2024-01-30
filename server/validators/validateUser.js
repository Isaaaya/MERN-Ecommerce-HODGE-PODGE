const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const { User } = require('../models/index');

const validateUpdateUser = [
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
        .escape()
        .isEmail().withMessage('Email must be valid').bail()
        .custom(async (value, { req }) => {
            const user = await User.findOne({ email: value });
            if (user && user.email !== req.user.email) {
                return Promise.reject();
            }
        })
        .withMessage('Email is already taken')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];


module.exports = { validateUpdateUser }