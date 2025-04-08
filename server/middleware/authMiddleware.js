import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        console.log("Decoded Token:", decoded); // Debug log
        req.user = await User.findById(decoded.id).select("-password"); // Populate req.user
        console.log("Authenticated User:", req.user); // Debug log
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }
        next();
    } catch (error) {
        console.error("Token Verification Error:", error); // Debug log
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export default authMiddleware;
