import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category", 
        required: true,
        validate: {
            validator: mongoose.Types.ObjectId.isValid,
            message: "Invalid category ID"
        }
    },
    thumbnail: { 
        type: String,
        required: false,
        default: ""
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",  // made a change here to "user" from "User"
        required: true,
        validate: {
            validator: mongoose.Types.ObjectId.isValid,
            message: "Invalid user ID"
        }
    },
}, { timestamps: true });

const blogModel = mongoose.model("Blog", blogSchema);
export default blogModel;