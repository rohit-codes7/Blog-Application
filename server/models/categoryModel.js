import mongoose from 'mongoose';// because mongoose in a schema less by default

// schema are used to define the structure of documents within a collection in MongoDB.
const categorySchema = new mongoose.Schema({
    title:{
        type:String
    },

})
const categoryModel = mongoose.model('categories',categorySchema);

export default categoryModel;