import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { errHandlerG } from "./middleware/errorHandlerGlobal.js";

const app = express();
const port = process.env.PORT || 3330;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xpltb.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err.message);
  });

app.use(express.json());
app.use(cors());

app.use("/api/auth", errHandlerG, authRouter);
app.use("/api/test", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
