const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const { Category, Subcategory } = require('../models/index');

const validateCreateSubcategory = [
    check('title')
        .trim().exists({ checkFalsy: true }).withMessage('Subcategory title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Subcategory title must be between 3 and 40 characters').bail()
        .matches(/^[a-zA-Z0-9&]+$/).withMessage('Subcategory title can contain only letters, numbers, and ampersands').bail(),
    check('parentGroupId')
        .trim().exists({ checkFalsy: true }).withMessage('Parent group ID is required').bail()
        .custom(async (value) => {
            if (mongoose.isValidObjectId(value)) {
                const existingCategory = await Category.findById(value);
                if (!existingCategory) {
                    return Promise.reject();
                }
            }
            else return Promise.reject();
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

const validateUpdateSubcategory = [
    check('subcategoryId')
        .custom(async (value) => {
            if (mongoose.isValidObjectId(value)) {
                const existingSubcategory = await Subcategory.findById(value);
                if (!existingSubcategory) {
                    return Promise.reject();
                }
            }
            else return Promise.reject();
        }).withMessage('The subcategory does not exist').bail(),
    check('title')
        .optional()
        .trim().exists({ checkFalsy: true }).withMessage('Subcategory title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Subcategory title must be between 3 and 40 characters').bail()
        .matches(/^[a-zA-Z0-9&]+$/).withMessage('Subcategory title can contain only letters, numbers, and ampersands').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateDeleteSubcategory = [
    check('subcategoryId')
        .custom(async (value) => {
            if (mongoose.isValidObjectId(value)) {
                const existingSubcategory = await Subcategory.findById(value);
                if (!existingSubcategory) {
                    return Promise.reject();
                }
            }
            else return Promise.reject();
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


module.exports = { validateCreateSubcategory, validateUpdateSubcategory, validateDeleteSubcategory }