import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js"

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

//ENDPOINTS
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Escuchando en puerto " + process.env.PORT);
});
