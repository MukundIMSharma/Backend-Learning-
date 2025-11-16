import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
        try {
            const databseConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
            console.log(" \n Database connected successfully!! DB Host: " , databseConnection.connection.host);
        } catch (error) {
            console.log("Error in Database Connection: " , error);
            process.exit(1); // exit the process-> due to error           
        } 
}

export default connectDB;