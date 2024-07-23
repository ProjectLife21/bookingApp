import express, { Request, Response, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// db
import { connectDB } from "./db/connectDB";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_CONNECTION_STRING as string;

// middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Backend setup wit Express and TS" });
});

const startServer = async () => {
  try {
    await connectDB(MONGO_URI).then(() => {
      console.log("Database is connected!");

      app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

//start server
startServer();
