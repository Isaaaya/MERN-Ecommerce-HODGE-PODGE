const express = require('express');
const router = express.Router();
const { getUserProfile, updateUser, deleteUser, getWishlist, getCart } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.route('/profile').get(isAuthenticated, getUserProfile).put(isAuthenticated, updateUser).delete(isAuthenticated, deleteUser);
router.route('/profile/wishlist').get(isAuthenticated, getWishlist);
router.route('/profile/cart').get(isAuthenticated, getCart);

module.exports = router;