import express from 'express'
import apiRoutes from './routes/index'
import dotenv from 'dotenv'
import { connectDB } from './config/DBConfig'
import { PORT } from './config/ServerConfig'

const app=express()

dotenv.config()

app.use(express.json())

app.use('/api',apiRoutes)

const startServer = async () => {
  try {
    await connectDB(); // ✅ Wait for DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB. Server not started.");
    process.exit(1); // 🔴 Exit process if DB fails
  }
};

startServer()


