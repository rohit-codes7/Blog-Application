import express from "express";
import connectToDb from "./config/db.js";
import authRoutes from "./routes/blog.js";   // here we are assigning the auth.js file to authRoutes variable
const app = express();
const PORT = 9000;

connectToDb();
app.get('/',(req,res)=> {
   res.send("API is running")

});

// API Routes
app.use("/api/v1", authRoutes);


//listen is like shop, I decided to open a shop at location (PORT) 9000
app.listen(PORT,()=>{
    console.log(`API is running on http://localhost: ${PORT}`);

});