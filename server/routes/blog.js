import express from  'express';
import authController from '../controllers/authControllers.js';

const router = express.Router();

router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);

export default router;