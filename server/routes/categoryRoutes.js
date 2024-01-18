const express = require('express');
const router = express.Router();
const { listCategories, getCategoryById, createCategory, updateCategory, deleteCategory, getCategorySubcategoriesAPI } = require('../controllers/categoryController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { validateCreateCategory, validateUpdateCategory, validateDeleteCategory } = require('../validators/validateCategory');

router.route('/').get(listCategories);
router.route('/create').post(isAuthenticated, isAdmin, validateCreateCategory, createCategory);
router.route('/:categoryId').get(isAuthenticated, isAdmin, getCategoryById).put(isAuthenticated, isAdmin, validateUpdateCategory, updateCategory).delete(isAuthenticated, isAdmin, validateDeleteCategory, deleteCategory);
router.route('/:categoryId/subcategories').get(isAuthenticated, isAdmin, getCategorySubcategoriesAPI);

module.exports = router;