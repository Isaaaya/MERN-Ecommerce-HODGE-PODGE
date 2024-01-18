const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    wishlist: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
    cart: {
        products: [{ product: { type: mongoose.Types.ObjectId, ref: 'Product' }, quantity: Number, _id: false }],
        _id: false,
    },
    resetToken: {
        type: String,
    },
    resetTokenExpiration: {
        type: Date,
    },
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
});

UserSchema.methods.comparePasswords = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.cookie('jwt', token, {
        sameSite: 'strict',
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 30 * 60 * 60 * 24 * 1000,
    })
}



module.exports = mongoose.model('User', UserSchema);