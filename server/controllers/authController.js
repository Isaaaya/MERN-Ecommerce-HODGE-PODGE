const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const crypto = require('crypto');
const { transporter } = require('../utils/transporter');
const fs = require('fs');
const handlebars = require('handlebars');

const templateSource = fs.readFileSync('emails/signupLetter.hbs', 'utf-8');

const template = handlebars.compile(templateSource);

exports.signup = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });
    user.generateToken(res, user._id);

    transporter.sendMail({
        to: user.email,
        from: '11pz@ukr.net',
        subject: 'Sign up succeeded!',
        html: template({
            name: user.name
        })
    })
    res.status(201).json({ firstName, lastName, email, createdAt: user.createdAt });
});

exports.signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (await user.comparePasswords(password)) {
        user.generateToken(res, user._id);
        res.status(200).json({ firstName: user.firstName, lastName: user.lastName, email, createdAt: user.createdAt });
    } else {
        res.status(401);
        throw new Error('Invalid password');
    }
});

exports.signout = asyncHandler(async (req, res) => {
    res.clearCookie('jwt', {
        httpOnly: true,
        secure: true,
    })
    res.status(200).json({ msg: 'User logged out' })
});



exports.sendResetToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const token = crypto.randomBytes(32).toString("hex");

    await User.findOneAndUpdate({ email }, {
        $set: { resetToken: token, resetTokenExpiration: Date.now() + 3600000 }
    });

    transporter.sendMail({
        to: email,
        from: '11pz@ukr.net',
        subject: 'Password reset',
        html: `<h1>You requested password reset</h1>
                <p>Click <a href='http://localhost:3000/resetPassword/${token}'>here</a> to reset your password</p>
                <p><b>If it was not your action, please, ignore this email</b></p>
            `
    });

    res.status(200).json({ msg: 'Email is send' });
})



