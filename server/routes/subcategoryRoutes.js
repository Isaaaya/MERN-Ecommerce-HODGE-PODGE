const express = require('express');
const router = express.Router();
const { listSubcategories, getSubcategoryById, createSubcategory, updateSubcategory, deleteSubcategory } = require('../controllers/subcategoryController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { validateCreateSubcategory, validateUpdateSubcategory, validateDeleteSubcategory } = require('../validators/validateSubcategory');

router.route('/').get(listSubcategories);
router.route('/create').post(isAuthenticated, isAdmin, validateCreateSubcategory, createSubcategory);
router.route('/:subcategoryId').get(isAuthenticated, isAdmin, getSubcategoryById).put(isAuthenticated, isAdmin, validateUpdateSubcategory, updateSubcategory).delete(isAuthenticated, isAdmin, validateDeleteSubcategory, deleteSubcategory);

module.exports = router;