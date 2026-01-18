import User from "../Schemas/userSchema.js";
export  async function userRegister(req,res){

    const {name,email,password}=req.body;
    try{
        const user=await User({
            name,
            email,
            password
        })
        res.status(200).json({message:"successfull",user});
    } catch(e){
        res.status(401).json({message:e.message })
    }
}
