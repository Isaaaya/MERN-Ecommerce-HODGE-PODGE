const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const { Subcategory, Category } = require('../models/index');

exports.listSubcategories = asyncHandler(async (req, res) => {
    const query = req.query.search || '';
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = req.query.limit || 10;
    const skip = limit * page;
    const filter = { title: { $regex: query, $options: 'i' } };

    if (mongoose.isValidObjectId(query)) {
        const subcategories = [await Subcategory.findById(query).populate({
            path: 'productCollection category',
            select: 'title',
        }).lean()];
        res.status(200).json({ subcategories, totalPages: 1 });
    };

    const subcategories = await Subcategory.find(filter).skip(skip).limit(limit)
        .populate({
            path: 'productCollection category',
            select: 'title',
        }).lean();

    const totalSubcategories = await Subcategory.countDocuments(filter);
    const totalPages = Math.ceil(totalSubcategories / limit);

    res.status(201).json({ subcategories, totalSubcategories, page, totalPages });
});

exports.getSubcategoryById = asyncHandler(async (req, res) => {
    const { subcategoryId } = req.params;
    const subcategory = await Subcategory.findById(subcategoryId);
    res.status(200).json(subcategory);
});

exports.createSubcategory = asyncHandler(async (req, res) => {
    const { title, parentGroupId } = req.body;
    const category = await Category.findById(parentGroupId);
    const productCollection = category.productCollection;

    const subcategory = await Subcategory.create({ title, category: parentGroupId, productCollection });

    category.subcategories = [...category.subcategories, subcategory._id];

    await category.save();

    res.status(201).json(subcategory);
});

exports.updateSubcategory = asyncHandler(async (req, res) => {
    const { subcategoryId } = req.params;
    const { title, productCollection, category } = req.body;
    const subcategory = await Subcategory.findById(subcategoryId);

    if (category && category !== subcategory?.category?.toString()) {
        await Category.findByIdAndUpdate(subcategory.category, {
            $pull: { subcategories: subcategoryId }
        });
        await Category.findByIdAndUpdate(category, {
            $push: { subcategories: subcategoryId }
        });
    };

    subcategory.title = title || subcategory.title;
    subcategory.category = category || subcategory.category;
    subcategory.productCollection = productCollection || subcategory.productCollection;
    await subcategory.save();

    res.status(200).json(subcategory);
});


exports.deleteSubcategory = asyncHandler(async (req, res) => {
    const { subcategoryId } = req.params;
    const deletedSubcategory = await Subcategory.findByIdAndDelete(subcategoryId);
    await Category.findByIdAndUpdate(deletedSubcategory.category, {
        $pull: { subcategories: subcategoryId }
    })
    res.status(200).json(deletedSubcategory);
});


