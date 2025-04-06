import authModel from "../models/authModel.js";
class authControllers {

    static userRegistration = async (req, res) =>{
        const {name, email, password} = req.body;
        try{
            if(name && email && password){

                res.status(200).json({message: "User registered successfully"})
                const userExist = await authModel.findOne({email: email});
                if(userExist){
                    res.status(400).json({message: "User already exists"});
                }
                else{
                    const user = new authModel({
                        name,
                        email,
                        password
                    });
                    await user.save();
                    res.status(201).json({message: "User registered successfully"});
                }

            }
            else{
                res.status(400).json({message: "All fields are required"});
            }
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }
    };
    static userLogin = async (req,res)=>{
        const {email, password} = req.body;
        if(email && password){
            try{
                const user = await authModel.findOne({email: email});
                if(user){
                    if(user.password === password){
                        res.status(200).json({message: "User logged in successfully"});
                    }
                    else{
                        res.status(400).json({message: "Invalid credentials"});
                    }
                }
                else{
                    res.status(400).json({message: "User not found"});
                }
            }
            catch (error) {
                console.log(error.message);
                res.status(500).json({message: error.message});
            }
        }
        else{
            res.status(400).json({message: "All fields are required"});
        }
    };
}
export default authControllers;