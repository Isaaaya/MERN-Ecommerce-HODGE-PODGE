const { check, validationResult } = require('express-validator');
const { Product, ProductCollection, Category, Subcategory } = require('../models/index');

const validateCreateProduct = [
    check('title')
        .trim().exists({ checkFalsy: true }).withMessage('Product title is required').bail()
        .isLength({ min: 3, max: 50 }).withMessage('Product title must be between 3 and 50 characters').bail()
        .custom(async (value) => {
            const existingProduct = await Product.findOne({ title: value });
            if (existingProduct) {
                return Promise.reject();
            }
        }).withMessage('Product title is already taken').bail(),
    check('description')
        .trim().exists({ checkFalsy: true }).withMessage('Product description is required').bail()
        .isLength({ min: 10, max: 2000 }).withMessage('Product description must be between 10 and 2000 characters').bail(),
    check('extraDetails')
        .optional()
        .isLength({ min: 10, max: 1000 }).withMessage('Product extra details must be between 10 and 1000 characters').bail(),
    check('price')
        .trim().exists({ checkFalsy: true }).withMessage('Product price is required').bail()
        .isInt({ min: 0.1 }).withMessage('Only numbers from 0.1 are valid price values').bail(),
    check('quantity')
        .trim().exists({ checkFalsy: true }).withMessage('Product quantity is required').bail()
        .isInt({ min: 0 }).withMessage('Only numbers from 0 are valid quantity values').bail(),
    check('productCollection')
        .trim().exists({ checkFalsy: true }).withMessage('Product collection is required').bail()
        .custom(async (value) => {
            const existingCollection = await ProductCollection.findById(value);
            if (!existingCollection) {
                return Promise.reject();
            }
        }).withMessage('The collection does not exist').bail(),
    check('category')
        .trim().exists({ checkFalsy: true }).withMessage('Product category is required').bail()
        .custom(async (value) => {
            const existingCategory = await Category.findById(value);
            if (!existingCategory) {
                return Promise.reject();
            }
        }).withMessage('The category does not exist').bail(),
    check('subcategory')
        .trim().exists({ checkFalsy: true }).withMessage('Product subcategory is required').bail()
        .custom(async (value) => {
            const existingSubcategory = await Subcategory.findById(value);
            if (!existingSubcategory) {
                return Promise.reject();
            }
        }).withMessage('The subcategory does not exist').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateUpdateProduct = [
    check('title')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Product title is required').bail()
        .isLength({ min: 3, max: 50 }).withMessage('Product title must be between 3 and 50 characters').bail()
        .custom(async (value, { req }) => {
            const { productId } = req.params;
            const existingProduct = await Product.findOne({ title: value });
            if (existingProduct && (existingProduct._id.toString() !== productId.toString())) {
                return Promise.reject();
            }
        }).withMessage('Product title is already taken').bail(),
    check('description')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Product description is required').bail()
        .isLength({ min: 10, max: 1000 }).withMessage('Product description must be between 10 and 1000 characters').bail(),
    check('extraDetails')
        .optional()
        .isLength({ min: 10, max: 1000 }).withMessage('Product extra details must be between 10 and 1000 characters').bail(),
    check('price')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Product price is required').bail()
        .isNumeric().withMessage('Only Decimals allowed').bail(),
    check('quantity')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Product quantity is required').bail()
        .isNumeric().withMessage('Product quantity must be a number').bail(),
    check('productCollection')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Product collection is required').bail()
        .custom(async (value) => {
            const existingCollection = await ProductCollection.findById(value);
            if (!existingCollection) {
                return Promise.reject();
            }
        }).withMessage('The collection does not exist').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateDeleteProduct = [
    check('productId')
        .custom(async (value) => {
            const existingProduct = await Product.findById(value);
            if (!existingProduct) {
                return Promise.reject();
            }
        }).withMessage('The product does not exist').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];


module.exports = { validateCreateProduct, validateUpdateProduct, validateDeleteProduct };