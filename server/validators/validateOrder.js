const { check, validationResult } = require('express-validator');

const validateCreateOrder = [
    // check("userEmail").not().isEmpty().withMessage('User email is required').bail()
    //     .escape()
    //     .isEmail().withMessage('Email must be valid').bail(),
    // check("shippingDetails.firstName").not().isEmpty().withMessage('First name is required').bail().matches(/^[A-Za-z\s]+$/).withMessage('First name must be alphabetic').bail(),

    // check("shippingDetails.lastName").not().isEmpty().withMessage('Last name is required').bail().matches(/^[A-Za-z\s]+$/).withMessage('Last name must be alphabetic').bail(),

    // check("shippingDetails.streetAddress").not().isEmpty().withMessage('Apt number is required').bail().matches(/^[a-zA-Z0-9.,]+$/).withMessage('Street address can contain only letters, numbers, dots, and commas'),

    // check("shippingDetails.aptNumber").not().isEmpty().withMessage('Apartment number is required').bail().matches(/^[a-zA-Z0-9]+$/).withMessage('Apartment number can contain only letters and numbers').bail(),

    // check("shippingDetails.state").not().isEmpty().withMessage('State is required').bail().matches(/^[A-Za-z\s]+$/).withMessage('State name must be alphabetic').bail(),

    // check("shippingDetails.zip").not().isEmpty().withMessage('ZIP is required').bail().matches(/^\d+$/).withMessage('ZIP must be numeric').bail(),

    check('products')
        .isArray({ min: 1 }).withMessage('The products array must not be empty')
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


module.exports = { validateCreateOrder }