import express from 'express';
import categoryControllers from '../controllers/categoryControllers.js';

const router = express.Router();

router.get('/get/categories', categoryControllers.getAllCategories);

export default router;
