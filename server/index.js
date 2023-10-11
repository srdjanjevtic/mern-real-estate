import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

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

app.get("/", (req, res) => {
  res.send("Welcome to real-estate backend");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
