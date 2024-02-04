const allowedOrigins = require('../config/allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

// const corsOptionsDelegate = (req, callback) => {
//     let corsOptions;
//     if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
//       corsOptions = { origin: true }
//     } else {
//       corsOptions = { origin: false };
//     }
//     callback(null, corsOptions);
//   }

module.exports = corsOptions