import blogModel from "../models/blogModels.js";
import categoryModel from "../models/categoryModel.js";


class blogControllers {

  // ✅ Fetch all blogs by the logged-in user
  static async getAllBlogs(req, res) {
    try {
      const fetchAllBlogs = await blogModel.find({}).sort({ createdAt: -1 })

      return res.status(200).json(fetchAllBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  
  static async getMyBlogs(req, res) {
    try {
      console.log("User ID:")
      const fetchMyBlogs = await blogModel.find({user: req.user._id});
      console.log("Fetched Blogs:", fetchMyBlogs);

      return res.status(200).json(fetchMyBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  // ✅ Add a new blog to the database
  static async addNewBlog(req, res) {
    const { title, category, description } = req.body;
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    try {
      // Field validation
      if (!title || !category || !description) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create new blog instance
      const newBlog = new blogModel({
        title,
        category,
        description,
        thumbnail: req.file?.filename || "",
        user: req.user._id // Attach current user to blog
      });

      // Save to DB
      const savedBlog = await newBlog.save();
      return res.status(201).json({ message: "Blog added successfully", blog: savedBlog });

    } catch (error) {
      console.error("Error saving blog:", error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  // ✅ Fetch a single blog by ID
  static async getSingleBlog(req, res) {
    const { id } = req.params;

    try {
      if (!id) {
        return res.status(400).json({ message: "Blog ID is required." });
      }

      const singleBlog = await blogModel.findById(id);

      if (!singleBlog) {
        return res.status(404).json({ message: "Blog not found." });
      }

      return res.status(200).json(singleBlog);
    } catch (error) {
      console.error("Error fetching single blog:", error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  // Update a blog
static async updateBlog(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
      const updatedBlog = await blogModel.findByIdAndUpdate(
          id,
          {
              title,
              description,
              updatedAt: Date.now()
          },
          { new: true }
      );

      if (!updatedBlog) {
          return res.status(404).json({ message: "Blog not found" });
      }

      res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}



// Delete a blog
static async deleteBlog(req, res) {
  const { id } = req.params;

  try {
      const deletedBlog = await blogModel.findByIdAndDelete(id);

      if (!deletedBlog) {
          return res.status(404).json({ message: "Blog not found" });
      }

      res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

}

export default blogControllers;
