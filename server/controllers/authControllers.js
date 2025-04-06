import authModel from "../models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class authControllers {

    static userRegistration = async (req, res) => {
        const { name, email, password } = req.body;
        console.log("User Registration Request:", req.body);
        console.log(req.body);
        try {
            if (name && email && password) {
                const isUser = await authModel.findOne({ email: email });
        
                if (!isUser) {
                    const genSalt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(password, genSalt);
        
                  const newUser = new authModel({
                        name,
                        email,
                        password: hashedPassword,
                    });
                    const savedUser = await newUser.save();

                    if(savedUser){
                        console
                    }
        
                    res.status(201).json({ message: "User registered successfully" });
                } else {
                    return res.status(400).json({ message: "User already exists" });
                }
            } else {
                res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    static userLogin = async (req, res) => {
        const { email, password } = req.body;
    
        try {
            if (email && password) {
                const isEmail = await authModel.findOne({ email: email });
    
                if (isEmail) {
                    if(isEmail.email===email && await bcrypt.compare(password, isEmail.password))
                      
                    
                {
                        // Generate JWT token
                   
                        const token = jwt.sign({ userID: isEmail._id }, 
                            "Good Morning",
                             { expiresIn: "2d" 

                             });
                             console.log("Token:", token);
               
                        return res.status(200).json({
                            message: "Login successful",
                            token: token,
                            name: isEmail.name,
                            
                        });
                    } else {
                        return res.status(400).json({ message: "Invalid credentials" });
                    }
                } else {
                    return res.status(400).json({ message: "Email does not exist" });
                }
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
}
export default authControllers;