import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import tutorialRouter from "./routes/tutorialRouter.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/igtechso');
    console.log("database connected successfully")

    const app = Express();
    config();
    const PORT = process.env.PORT;

    app.use(Express.json({ limit: "10mb" }));
    app.use(cors({
        origin: ["http://localhost:5173"]
    }));
    app.use(cookieParser());


    app.use("/api/auth", authRouter)
    app.use("/api/tutorial", tutorialRouter)

    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT)
    })

}

main();