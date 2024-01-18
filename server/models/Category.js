const mongoose = require('mongoose');
const Product = require('./Product');
const Subcategory = require('./Subcategory');

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 20,
    },
    subcategories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Subcategory'
    }],
    productCollection: {
        type: mongoose.Types.ObjectId,
        ref: 'ProductCollection'
    }
});

CategorySchema.pre('findOneAndDelete', async function (next) {
    const id = this.getQuery()._id;
    try {
        await Product.deleteMany({ category: id });
        next();
        await Subcategory.deleteMany({ category: id });
    } catch (error) {
        next(error);
    }
})


module.exports = mongoose.model('Category', CategorySchema);