const express = require('express');
const router = express.Router();
const { listProducts, createProduct, updateProduct, deleteProduct, getProductById, addToWishlist, removeOneFromWishlist, addToCart, removeOneFromCart, removeManyFromCart } = require('../controllers/productController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { validateCreateProduct, validateUpdateProduct, validateDeleteProduct } = require('../validators/validateProduct');

router.route('/').get(listProducts);
router.route('/create').post(isAuthenticated, isAdmin, validateCreateProduct, createProduct);
router.route('/:productId').get(getProductById).put(isAuthenticated, isAdmin, validateUpdateProduct, updateProduct).delete(isAuthenticated, isAdmin, validateDeleteProduct, deleteProduct);
router.route('/:productId/wishlist').post(isAuthenticated, addToWishlist).delete(isAuthenticated, removeOneFromWishlist);
router.route('/:productId/cart').post(isAuthenticated, addToCart).delete(isAuthenticated, removeOneFromCart);
router.route('/:productId/cart-remove-many/:productQuantityInCart').delete(isAuthenticated, removeManyFromCart);



module.exports = router;