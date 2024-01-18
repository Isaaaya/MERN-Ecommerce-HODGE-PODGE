const express = require('express');
const router = express.Router();
const { createOrder, listOrders, getOrderById } = require('../controllers/orderController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { validateCreateOrder } = require('../validators/validateOrder')

router.route('/').get(isAuthenticated, isAdmin, listOrders);
router.route('/:orderId').get(isAuthenticated, isAdmin, getOrderById);
router.route('/create').post(validateCreateOrder, createOrder);

module.exports = router;