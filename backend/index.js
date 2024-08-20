import express from "express";
import colors from "colors";
import mongooose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const url =
  "mongodb://admin:user%40123@cluster0-shard-00-00.ktx8n.mongodb.net:27017,cluster0-shard-00-01.ktx8n.mongodb.net:27017,cluster0-shard-00-02.ktx8n.mongodb.net:27017/?ssl=true&replicaSet=atlas-8odgjm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
app.get("/", (req, res) => {
  res.send("Running successfully");
});

mongooose
  .connect(url)
  .then(() => console.log("MongoDB connected".cyan.bold))
  .catch((err) => console.log(err));

app.use("/books", bookRoute);

app.listen(5555, () => {
  console.log("Server is running on port 5555".magenta.bold);
});
