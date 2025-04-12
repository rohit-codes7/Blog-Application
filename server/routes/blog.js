import express from 'express';
import path from 'path';
import fs from 'fs';
import authController from '../controllers/authControllers.js';
import categoryControllers from '../controllers/categoryControllers.js';
import blogControllers from '../controllers/blogControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import multer from 'multer';

// 🔧 Ensure 'public/upload' directory exists
const uploadDir = path.join(process.cwd(), 'public', 'upload');
try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
} catch (error) {
  console.error('Error creating upload directory:', error);
}

// 🗃️ Multer config for storing files
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

// 🧾 AUTH ROUTES
router.post("/user/register", authController.userRegistration);
router.post("/user/login", authController.userLogin);

// 📂 CATEGORY ROUTES
router.post("/add/category",authMiddleware,categoryControllers.addNewCategory);
router.get("/get/category",authMiddleware, categoryControllers.getAllCategories);

// 📝 BLOG ROUTES
router.post(
  "/add-blog",
  authMiddleware, // ✅ First check user is authenticated
  upload.single("thumbnail"), // ✅ Then upload file
  blogControllers.addNewBlog
);

router.get(
  "/get/allBlogs",
  authMiddleware, // ✅ Required to fetch user's blogs only
  blogControllers.getAllBlogs
);

router.get("/get/singleBlog/:id", blogControllers.getSingleBlog);

router.get(
  "/get/myBlogs",
  authMiddleware, // ✅ Required to fetch user's blogs only
  blogControllers.getMyBlogs
);


router.put("/update/blog/:id", upload.single("thumbnail"), blogControllers.updateBlog);


router.delete(
  "/delete/blog/:id",
   authMiddleware,
    blogControllers.deleteBlog);


export default router;
