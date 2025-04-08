import express from  'express';
import authController from '../controllers/authControllers.js';
import categoryControllers from '../controllers/categoryControllers.js';
import blogControllers from '../controllers/blogControllers.js';

const router = express.Router();

router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);
router.post("/add/category",categoryControllers.addNewCategory);
router.get("/get/category",categoryControllers.getAllCategories);
router.post("/add-blog",blogControllers.addNewBlog);
router.get("/get/allBlogs",blogControllers.getAllBlogs);






export default router;