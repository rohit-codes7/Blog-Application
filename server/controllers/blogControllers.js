import blogModel from "../models/blogModels.js";
import categoryModel from "../models/categoryModel.js";
import multer from "multer";
class blogControllers {

    // fetching all the blogs from the database
    static async getAllBlogs(req, res) {
        try {
            // fetching all blogs from the database
            // and sending them as a response
            const getAllBlogs = await blogModel.find({user:req.user._id});
            res.status(200).json(getAllBlogs);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    // adding a new blog to the database
    static async addNewBlog(req, res) {
        console.log(req.file); // using multer to upload the file

        console.log(req.body);
        try {
            const { title, category, description } = req.body;
            console.log(title, category, description);
            if (title && category && description) {
                const newBlog  = new blogModel({
                    title: title,
                    category: category,
                    description :description,
                    thumbnail: req.file?.filename || "",  // using multer to upload the file
                })
                const savedBlog = await newBlog.save(); // saving the blog to the database
                if (savedBlog) { 
                    res.status(201).json({ message: "Blog added successfully" });
                }
                else {
                    res.status(500).json({ message: "Blog not added" });
                }
            } 
            else {
                return res.status(400).json({ message: "All fields are required" });
            }


        } catch (error) {
            console.log({message : error.message});

        }
    }

    //fetching a single blog from the database
    static async getSingleBlog(req, res) {
       const {id}  = req.params;
       try {
        if(id){
            const singleBlog = await blogModel.findById(id).populate("user").populate("category");
            if(singleBlog){
                res.status(200).json(singleBlog);
            }else{
                res.status(404).json({message:"Blog not found"});
            }
        }
       } catch (error) {
        res.status(500).json({ message: error.message });
        
       }

}
}

export default blogControllers;