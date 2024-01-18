const mongoose = require('mongoose');
const Product = require('./Product')

const SubcategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 20,
    },
    productCollection: {
        type: mongoose.Types.ObjectId,
        ref: 'ProductCollection',
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }
});

SubcategorySchema.pre('findOneAndDelete', async function (next) {
    const id = this.getQuery()._id;
    try {
        await Product.deleteMany({ subcategory: id });
        next();
    } catch (error) {
        next(error);
    }
})


module.exports = mongoose.model('Subcategory', SubcategorySchema);