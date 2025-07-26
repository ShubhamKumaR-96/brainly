import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/ServerConfig"

export const generateToken=async(user:any)=>{
    return jwt.sign({id:user._id},JWT_SECRET,{
        expiresIn:"1h"
    })
}