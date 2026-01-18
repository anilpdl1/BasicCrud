import User from "../Schemas/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export  async function userRegister(req,res){
    const {name,email,password}=req.body;
    try{
        const userExists= await User.findOne({email});
    if(userExists) return res.status(400).json({message:"User already exists"});
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
        const user=await  User({
            name,
            email,
            password:hashedPassword
        })

        await user.save();
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.cookie("token",token);
        return res.status(200).json({message:"successfull",user});
    } catch(e){
        res.status(401).json({message:e.message })
    }
}
export async function userLogin(req,res){
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"User doesn't exists"});
        else{
            const matched=await bcrypt.compare(password,user.password);
            if(matched){
                const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
                res.cookie("Token",token);
                return res.status(200).json({message:"Logged in successfully"});
            } else{
                return res.status(400).json({message:"Incorret Password entered"});
            }
        }
    } catch(e){
        console.log(e.message);
        return res.status(500).json({message:"Internal server error"});
    }
}
