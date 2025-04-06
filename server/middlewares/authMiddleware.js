import jwt from 'jsonwebtoken';
import authModel from '../models/authModel.js';

const checkIsUserAuthenticated = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            const { userID } = jwt.verify(token, "Good Morning");
            req.user = await authModel.findById(userID).select("-password");
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
    } else {
        return res.status(401).json({ message: "No token provided" });

    }
};

export default checkIsUserAuthenticated;