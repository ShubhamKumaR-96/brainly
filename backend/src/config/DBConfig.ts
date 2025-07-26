import mongoose from "mongoose";
import { MONGO_URL } from "./ServerConfig";

export const connectDB=async()=>{
    try {

        if(!MONGO_URL){
            throw new Error("❌ MONGO URL is not defined in enviroment variable")
        }

        await mongoose.connect(MONGO_URL)

        console.log("✅ Connected to MONGO_DB")

    } catch (error:any) {
        console.log("❌ Error connecting to DB",error.message)
        throw error
    }
}