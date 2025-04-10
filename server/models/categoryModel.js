import mongoose from 'mongoose';// because mongoose in a schema less by default

// schema are used to define the structure of documents within a collection in MongoDB.
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
       
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

})
const categoryModel = mongoose.model('categories',categorySchema);

export default categoryModel;