import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cors({
    origin: process.env.CORS_ORIGIN
        ? process.env.CORS_ORIGIN.split(",")
        : "http://localhost:5173",
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"],
}));

//impor the routes
import healthRouter from "./routes/healthcheck.routes.js";
import authRoute from "./routes/auth.routes.js"

app.use("/api/v1/healthcheck", healthRouter);
app.use("/api/v1/auth", authRoute);
app.get("/", (req, res) => {
    res.send("Welcome to PM");
});

app.get("/twitter", (req, res) => {
    res.send("welcome to x");
});

export default app;
