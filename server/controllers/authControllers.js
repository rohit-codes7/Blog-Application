class authControllers {
    static userRegistration = async (req, res) =>{
        res.send("User Registration API is working fine");
    };
    static userLogin = async (req,res)=>{
        res.send("User Login API is working")
    };
}
export default authControllers;