import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const url=process.env.MONGO_URI

const connectdb=async ()=>{
try{
   await mongoose.connect(url);
}
catch(e){
    console.log(e.message);
}
}
export default connectdb;