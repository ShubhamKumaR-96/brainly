import { model, Schema } from "mongoose"
import bcrypt from 'bcrypt'
interface IUser extends Document{
    username:string,
    password:string
}

const userSchema=new Schema({
    username:{type:String,unique:true,trim:true},
    password:{type:String,required:true}
})

// Pre save hook for hashing password

userSchema.pre("save", async function(next){
  if (!this.isModified("password")) return next();

  const salt=await bcrypt.genSalt(5)
  this.password=await bcrypt.hash(this.password,salt)
  next()
})

// method for comapring password
userSchema.methods.comparepassword=async function(enteredPassword:string){
    return await bcrypt.compare(enteredPassword,this.password)
}

export const UserModel=model("User",userSchema)