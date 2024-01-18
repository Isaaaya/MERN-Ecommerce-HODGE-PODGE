const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const handlebarOptions = {
    viewEngine: {
        extName: ".hds",
        partialsDir: path.resolve('./emails'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./emails'),
    extName: ".hds",
};

export const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.API_KEY,
    }
}));

transporter.use('compile', hbs(handlebarOptions));