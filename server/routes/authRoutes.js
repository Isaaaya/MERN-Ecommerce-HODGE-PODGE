const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const validateSignup = require('../validators/validateSignup');
const validateSignin = require('../validators/validateSignin');

router.route('/signup').post(validateSignup, signup);
router.route('/signin').post(validateSignin, signin);
router.route('/signout').post(isAuthenticated, signout);

module.exports = router;