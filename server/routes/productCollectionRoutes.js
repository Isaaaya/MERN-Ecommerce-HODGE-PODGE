const express = require('express');
const router = express.Router();
const { listProductCollections, createProductCollection, updateProductCollection, deleteProductCollection, listCollectionCategories, createCollectionBanner, deleteCollectionBanner, getCollectionById } = require('../controllers/productCollectionController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { validateCreateCollection, validateUpdateCollection, validateDeleteCollection } = require('../validators/validateCollection');

router.route('/').get(listProductCollections);
router.route('/create').post(isAuthenticated, isAdmin, validateCreateCollection, createProductCollection);
router.route('/:productCollectionId').get(getCollectionById).put(isAuthenticated, isAdmin, validateUpdateCollection, updateProductCollection).delete(isAuthenticated, isAdmin, validateDeleteCollection, deleteProductCollection);
router.route('/:productCollectionId/banner').post(isAuthenticated, isAdmin, createCollectionBanner).put(isAuthenticated, isAdmin, createCollectionBanner).delete(isAuthenticated, isAdmin, deleteCollectionBanner);
router.route('/:productCollectionId/categories').get(isAuthenticated, isAdmin, listCollectionCategories)


module.exports = router;