import express, { NextFunction, Request, Response, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// db
import { connectDB } from "./db/connectDB";

// routes
import { authRouter } from "./routes/authRoute";

import { errorHandleMiddleware } from "./middleware/errorHandlerMiddleware";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_CONNECTION_STRING as string;

// middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// API
app.use("/api/v1/auth", authRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ msg: "Sorry can't find that!" });
  next();
});

app.use(errorHandleMiddleware);

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
    process.exit(1);
  }
};

//start server
startServer();
