const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

module.exports.transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.API_KEY,
    }
}));