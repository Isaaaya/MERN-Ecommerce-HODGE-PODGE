const { check, validationResult } = require('express-validator');

const validateCreateOrder = [
    // check('userEmail')
    //     .not().isEmpty().withMessage('User email is required').bail()
    //     .isEmail().withMessage('Email must be valid').bail(),
    // check("shippingDetails.firstName").not().isEmpty().withMessage('First name is required').bail(),
    // check("shippingDetails.lastName").not().isEmpty().withMessage('Last name is required').bail(),
    // check("shippingDetails.aptNumber").not().isEmpty().withMessage('Apt number is required').bail(),
    // check("shippingDetails.state").not().isEmpty().withMessage('State is required').bail(),
    // check("shippingDetails.zip").not().isEmpty().withMessage('Zip is required').bail(),
    // check('products')
    //     .isArray({ min: 1 }).withMessage('The products array must not be empty')
    //     .bail(),
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