const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    extraDetails: {
        type: String,
    },
    features: {
        type: [String],
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    productCollection: {
        type: mongoose.Types.ObjectId,
        ref: 'ProductCollection',
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    subcategory: {
        type: mongoose.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);