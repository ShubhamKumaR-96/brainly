import {z} from 'zod'

export const contentSchema=z.object({
    type:z.enum(["document", "tweet", "youtube", "link"]),
    link:z.string().url(),
    title:z.string().trim().min(1,"Title is required"),
    tags:z.array(z.string()).optional()
})