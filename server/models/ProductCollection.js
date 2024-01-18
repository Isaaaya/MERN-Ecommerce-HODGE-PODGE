const mongoose = require('mongoose');
const Category = require('./Category');
const Subcategory = require('./Subcategory');
const Product = require('./Product');

const ProductCollectionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 25,
    },
    categories: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
    banner: {
        imageUrl: {
            type: String,
        },
        caption: {
            type: String,
        },
        captionColor: {
            type: String,
            default: '#aabbcc',
        },
        content: String,
    }
});


ProductCollectionSchema.pre('findOneAndDelete', async function (next) {
    const id = this.getQuery()._id;
    try {
        await Product.deleteMany({ productCollection: id });
        await Subcategory.deleteMany({ productCollection: id });
        await Category.deleteMany({ productCollection: id });
        next();
    } catch (error) {
        next(error);
    }
});



module.exports = mongoose.model('ProductCollection', ProductCollectionSchema);