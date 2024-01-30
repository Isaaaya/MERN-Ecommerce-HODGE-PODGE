const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const { ProductCollection, Category } = require('../models/index');

exports.listProductCollections = asyncHandler(async (req, res) => {
    const query = req.query.search || '';
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = req.query.limit || null;
    const skip = limit * page;
    const filter = { title: { $regex: query, $options: 'i' } };

    if (mongoose.isValidObjectId(query)) {
        const productCollections = [await ProductCollection.findById(query).populate({
            path: 'categories',
            select: 'title',
            populate: {
                path: 'subcategories',
                select: 'title'
            }
        }).lean()];
        res.status(200).json({ productCollections, totalPages: 1 });
    };

    const productCollections = await ProductCollection.find(filter).skip(skip).limit(limit).populate({
        path: 'categories',
        select: 'title',
        populate: {
            path: 'subcategories',
            select: 'title'
        }
    }).lean();

    const totalProductCollections = await ProductCollection.countDocuments(filter);
    const totalPages = Math.ceil(totalProductCollections / limit);

    res.status(200).json({ productCollections, totalProductCollections, page, totalPages });
});


exports.createProductCollection = asyncHandler(async (req, res) => {
    const { title } = req.body;
    const productCollection = await ProductCollection.create({ title });
    res.status(201).json(productCollection);
});


exports.updateProductCollection = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const { title } = req.body;
    const updatedProductCollection = await ProductCollection.findByIdAndUpdate(productCollectionId, {
        $set: {
            title
        }
    }, { new: true })
    res.status(200).json(updatedProductCollection);
});


exports.deleteProductCollection = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const deletedProductCollection = await ProductCollection.findByIdAndDelete(productCollectionId);
    res.status(200).json(deletedProductCollection);
});


exports.listCollectionCategories = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const categories = await Category.find({ productCollection: productCollectionId }).lean();
    res.status(200).json(categories);
});

exports.getProductCollectionById = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const productCollection = await ProductCollection.findById(productCollectionId).select('title banner')
    res.status(200).json(productCollection)
})


exports.handleCollectionBanner = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const { imageUrl, caption, captionColor, content } = req.body;
    const updatedCollection = await ProductCollection.findByIdAndUpdate(productCollectionId, {
        banner: { imageUrl, caption, captionColor, content }
    });
    res.status(201).json(updatedCollection)
});

exports.deleteCollectionBanner = asyncHandler(async (req, res) => {
    const { productCollectionId } = req.params;
    const updatedCollection = await ProductCollection.findByIdAndUpdate(productCollectionId, {
        banner: {}
    });
    res.status(200).json(updatedCollection)
});