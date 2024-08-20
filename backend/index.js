import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const PASSWORD = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://pritishpatra06:${PASSWORD}@cluster0.sxfkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  app.get("/", (req, res) => {
    res.send("Hello World");
   console.log(PASSWORD)
});

mongoose
  .connect(url, )
  .then(() => console.log("MongoDB connected".cyan.bold))
  .catch((err) => console.log(err));

app.use("/books", bookRoute);

app.listen(5555, () => {
  console.log("Server is running on port 5555".magenta.bold);
});
