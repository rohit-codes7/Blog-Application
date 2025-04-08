import express from 'express';
import blogControllers from '../controllers/blogControllers.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/get/allBlogs', authMiddleware, blogControllers.getAllBlogs);
router.post('/add', authMiddleware, blogControllers.addNewBlog);

export default router;
