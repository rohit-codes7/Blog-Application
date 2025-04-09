import express from 'express';
import path from 'path';
import fs from 'fs';
import authController from '../controllers/authControllers.js';
import categoryControllers from '../controllers/categoryControllers.js';
import blogControllers from '../controllers/blogControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import multer from 'multer';


// Create upload directory if it doesn't exist
const uploadDir = path.join(process.cwd(), 'public', 'upload');
try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
} catch (error) {
  console.error('Error creating upload directory:', error);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  }
});

const router = express.Router();

router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);
router.post("/add/category",categoryControllers.addNewCategory);
router.get("/get/category",categoryControllers.getAllCategories);
router.post("/add-blog",upload.single("thumbnail"),blogControllers.addNewBlog);
router.get("/get/allBlogs",blogControllers.getAllBlogs);
router.get("/get/singleBlog/:id",blogControllers.getSingleBlog);

export default router;