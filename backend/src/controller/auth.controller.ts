import { Request,Response } from "express"
import bcrypt from 'bcrypt'
import { UserModel } from "../models/User.model"
import { generateToken } from "../utils/generateToken"

export const signup=async(req:Request,res:Response)=>{

   try {
     const {username,password}=req.body
     await UserModel.create({
        username,password
     })

     return res.status(201).json({msg:"User created successfully"})
   } catch (error:any) {
        return res.status(500).json({
            msg:"Signup Failed",error:error.message
        })
   }

}

export const signin=async(req:Request,res:Response)=>{
    try {
        const {username,password}=req.body

        const user=await UserModel.findOne({username})

        if (!user || !(await bcrypt.compare(password,user.password))){
            return res.status(401).json({
                msg:"Invalid credentials"
            })
        }

        const token = await generateToken(user)

        return res.status(200).json({
            msg:"Signin successfully", token:token
        })

    } catch (error:any) {
        return res.status(500).json({ message: "Signin failed", error: error.message });
    }
}