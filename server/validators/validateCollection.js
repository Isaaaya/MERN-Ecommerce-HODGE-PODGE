const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const { ProductCollection } = require('../models/index');

const validateCreateCollection = [
    check('title')
        .trim().exists({ checkFalsy: true }).withMessage('Collection title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Collection title must be between 3 and 40 characters').bail()
        .matches(/^[a-zA-Z0-9& ]+$/).withMessage('Collection title can contain only letters, numbers, and ampersands').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateUpdateCollection = [
    check('productCollectionId')
        .custom(async (value) => {
            if (mongoose.isValidObjectId(value)) {
                const existingCollection = await ProductCollection.findById(value);
                if (!existingCollection) {
                    return Promise.reject();
                }
            }
            else return Promise.reject();
        }).withMessage('The collection does not exist').bail(),
    check('title')
        .trim().exists({ checkFalsy: true }).withMessage('Collection title is required').bail()
        .isLength({ min: 3, max: 40 }).withMessage('Collection title must be between 3 and 40 characters').bail()
        .matches(/^[a-zA-Z0-9& ]+$/).withMessage('Collection title can contain only letters, numbers, and ampersands').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json(errors);
        } else {
            next();
        }
    }
];

const validateDeleteCollection = [
    check('productCollectionId')
        .custom(async (value) => {
            if (mongoose.isValidObjectId(value)) {
                const existingCollection = await ProductCollection.findById(value);
                if (!existingCollection) {
                    return Promise.reject();
                }
            }
            else return Promise.reject();
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

module.exports = { validateCreateCollection, validateUpdateCollection, validateDeleteCollection };