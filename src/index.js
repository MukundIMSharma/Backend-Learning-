import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "../../.env"
   
});

connectDB();





/*
import express from "express";

const app = express();

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error" , (error)=> {
            console.log("Error in setting up connection between server and application");
            throw error;
        })

        app.listen(process.env.PORT , ()=> {
            console.log(`Application is listening on port: ${process.env.PORT}`);
        })
    }
    catch(err){
        console.error("ERROR: ", err);
        throw err;
    }
})*/