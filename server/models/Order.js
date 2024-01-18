const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    products: {
        type: [{ product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true }, quantity: { type: Number, required: true }, _id: false }],
    },
    totalItems: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    shippingDetails: {
        type: { firstName: String, lastName: String, streetAdress: String, aptNumber: Number, state: String, zip: Number, _id: false },
        required: true,
    }
}, { timestamps: true })


module.exports = mongoose.model('Order', OrderSchema);