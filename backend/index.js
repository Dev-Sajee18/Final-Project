import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import { notFound,errorHandler} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js"
import fileRoute from "./routes/fileRoute.js";
import DbConnection from './DbConnection/DbConnection.js';


const app = express(); 
dotenv.config(); 

app.use(express.json());
app.use(express.urlencoded( {extended: true }))
app.use(cookieParser())
app.use("/api/users",userRoutes)
app.use("/api/file", fileRoute);

app.get("/",(req,res) => res.send("server is ready"));
app.use(notFound)
app.use(errorHandler)

DbConnection();
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
}) 














