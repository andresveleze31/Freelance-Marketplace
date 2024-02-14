import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";

import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Allow req.body
app.use(cors({origin: process.env.FRONT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

//ENDPOINTS
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("Escuchando en puerto " + process.env.PORT);
});
