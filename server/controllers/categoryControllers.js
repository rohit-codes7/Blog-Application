import categoryModel from "../models/categoryModel.js";

class categoryControllers{
    static async getAllCategories(req, res) {
        // fetching all categories from the database
        // and sending them as a response
        try {
            const getAllCategories = await categoryModel.find({});
            res.status(200).json(getAllCategories);
        } catch (error) {
            res.status(500).json({ message: error.message });
            
        }
    }

    static async addNewCategory(req, res) {
        const { title } = req.body;
        console.log(title);
        // checking if the title is not empty
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        try {
    
            if (title) {
                const newCategory = new categoryModel({
                    title: title,
                });
    
                const savedCategory = await newCategory.save();
    
                if (savedCategory) {
                    return res.status(200).json({ message: "Category added successfully" });
                } else {
                    return res.status(400).json({ message: "Failed to add category" });
                }
            } 
        } catch (error) {
            return res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }
    
}

export default categoryControllers;