import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const MONGODB_URI ="mongodb+srv://ayushjoshi0810:ayush123@cluster0.sso6lnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected ! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed: ", error);
        process.exit(1)
    }
}

export default connectDB