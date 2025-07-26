
import {z} from 'zod'

export const signupSchema=z.object({
    username:z.string().min(3, "Username must be at least 3 characters"),
    password:z.string().min(8,"password must be in 8 characters")
})

export const signinSchema=z.object({
    username:z.string(),
    password:z.string()
})