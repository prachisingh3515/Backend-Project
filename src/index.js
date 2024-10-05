import dotenv from "dotenv"
import {app} from './app.js'
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed ", err)
})

/*
This is another method to connect database
import express from "express";
const app=express()
( async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("application not able to talk to database")
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    }catch(error){
        console.log("ERROR: ",reeo)
    }
})()
    */