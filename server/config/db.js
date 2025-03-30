import mongoose from 'mongoose';
const connectToDb = async() =>{
    const res = await mongoose.connect("mongodb://localhost:27017/blog-mern-project"); 

    if(res){
        console.log("Connected Successfully to MOngoDB");
    }
}

export default connectToDb;