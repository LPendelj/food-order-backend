import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import foodRouter from './routers/food.router'
import userRouter from "./routers/user.router"
import { dbConnect } from "./configs/database.config";
import orderRouter from "./routers/order.router";
import path from 'path'

dotenv.config()

dbConnect();

const app = express();

app.use(express.json());
app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:4200", "https://6820b62d3ed4950008ce983e--foodman-foodorder.netlify.app", "*.netlify.app"]
    }
))

app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)

const port = process.env.PORT || 5000;

app.listen(
    port, () => {
        console.log("Welcome from localhost! " + port);
    }
) 

