const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const { Category, ProductCollection, Subcategory } = require('../models/index');

exports.listCategories = asyncHandler(async (req, res) => {
    const query = req.query.search || '';
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = req.query.limit || 10;
    const skip = limit * page;
    const filter = { title: { $regex: query, $options: 'i' } };

    if (mongoose.isValidObjectId(query)) {
        const categories = [await Category.findById(query).populate({
            path: 'productCollection subcategories',
            select: 'title',
        }).lean()];
        res.status(200).json({ categories });
    };

    const categories = await Category.find(filter).skip(skip).limit(limit).populate({
        path: 'productCollection subcategories',
        select: 'title',
    }).lean();

    const totalCategories = await Category.countDocuments(filter);
    const totalPages = Math.ceil(totalCategories / limit);

    res.status(200).json({ categories, totalCategories, page, totalPages });
});

exports.getCategoryById = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    res.status(200).json(category);
});

exports.createCategory = asyncHandler(async (req, res) => {
    const { title, parentGroupId } = req.body;
    const category = await Category.create({ title, productCollection: parentGroupId });
    await ProductCollection.findByIdAndUpdate(parentGroupId, {
        $push: { categories: category._id }
    })
    res.status(201).json(category);
});

exports.updateCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const { title, productCollection } = req.body;

    const category = await Category.findById(categoryId);

    if (productCollection && category.productCollection.toString() !== productCollection) {
        await ProductCollection.findByIdAndUpdate(category.productCollection, {
            $pull: { categories: categoryId }
        });
        await ProductCollection.findByIdAndUpdate(productCollection, {
            $push: { categories: categoryId }
        });
    };

    category.title = title || category.title;
    category.productCollection = productCollection || category.productCollection;
    await category.save();

    res.status(200).json(category);
});


exports.deleteCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    await ProductCollection.findByIdAndUpdate(deletedCategory.productCollection, {
        $pull: { categories: categoryId }
    })
    res.status(200).json(deletedCategory);
});


exports.getCategorySubcategoriesAPI = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const subcategories = await Subcategory.find({ category: categoryId }).lean();
    res.status(200).json(subcategories);
})

