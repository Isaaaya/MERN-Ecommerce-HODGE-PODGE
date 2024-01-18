const { check, validationResult } = require('express-validator');

const { ProductCollection, Category } = require('../models/index');

const validateCreateCategory = [
    check('title')
        .trim().exists({ checkFalsy: true }).withMessage('Category title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Category title must be between 3 and 40 characters').bail(),
    check('parentGroupId')
        .trim().exists({ checkFalsy: true }).withMessage('Parent group ID is required').bail()
        .custom(async (value) => {
            const existingProductCollection = await ProductCollection.findById(value);
            if (!existingProductCollection) {
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

const validateUpdateCategory = [
    check('categoryId')
        .custom(async (value) => {
            const existingCategory = await Category.findById(value);
            if (!existingCategory) {
                return Promise.reject();
            }
        }).withMessage('The category does not exist').bail(),
    check('title')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Category title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Category title must be between 3 and 40 characters').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateDeleteCategory = [
    check('categoryId')
        .custom(async (value) => {
            const existingCategory = await Category.findById(value);
            if (!existingCategory) {
                return Promise.reject();
            }
        }).withMessage('The category does not exist').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];


module.exports = { validateCreateCategory, validateUpdateCategory, validateDeleteCategory };