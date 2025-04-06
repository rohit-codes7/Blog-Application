import express from "express";
import connectToDb from "./config/db.js";
import authRoutes from "./routes/blog.js"; 
import cors from "cors"; // this is used to allow cross-origin requests, which is important for APIs that will be accessed from different domains.
  // here we are assigning the auth.js file to authRoutes variable
const app = express();
const PORT = 9000;
app.use(express.urlencoded({ extended: true }))

connectToDb();
app.use(cors()); // this is used to enable CORS (Cross-Origin Resource Sharing) for all routes in the application. This is important for APIs that will be accessed from different domains.

app.get('/',(req,res)=> {
   res.send("API is running")

});
app.use(express.json()); // this is used to parse the incoming request body in a middleware before your handlers, available under the req.body property.


// API Routes
app.use("/api/v1", authRoutes);


//listen is like shop, I decided to open a shop at location (PORT) 9000
app.listen(PORT,()=>{
    console.log(`API is running on http://localhost: ${PORT}`);


});