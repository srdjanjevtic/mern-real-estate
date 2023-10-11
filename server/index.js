import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3330;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to real-estate backend");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
