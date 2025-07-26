import dotenv from 'dotenv'

dotenv.config()

export const PORT=process.env.PORT || 3005

export const JWT_SECRET = process.env.JWT_SCERET || "secret_key";

export const MONGO_URL=process.env.MONGODB_URL

