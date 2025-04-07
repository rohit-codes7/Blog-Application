import express from  'express';
import authController from '../controllers/authControllers.js';
import categoryControllers from '../controllers/categoryControllers.js';

const router = express.Router();

router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);
router.post("/add/category",categoryControllers.addNewCategory);
router.post("/get/category",categoryControllers.getAllCategories);






export default router;