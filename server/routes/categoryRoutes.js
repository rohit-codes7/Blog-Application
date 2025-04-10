import express from 'express';
import categoryControllers from '../controllers/categoryControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';  

const router = express.Router();

// router.get('/get/categories',authMiddleware, categoryControllers.getAllCategories);
//router.post('/add/category',authMiddleware, categoryControllers.addNewCategory);

export default router;
