import express from "express";
import dotenv from "dotenv";
import connectdb from "./dbConnect/dbconnect.js";
import router from "./Routes/userRoute.js";
dotenv.config();
const PORT=process.env.PORT;
connectdb();
const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use('/user',router);
app.listen(PORT,()=>{

    console.log(`App listens to port ${PORT}`);
})