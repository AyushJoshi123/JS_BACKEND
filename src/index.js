// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";






dotenv.config({
    path: './env'
})

import express from "express";

const app = express()

connectDB()



















/*
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERR")
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log('APP is listening on port ${process.env.PORT}');
        })

    }catch (error){
        console.error("Error: ", error);
        throw err
      
    }
})()
*/
