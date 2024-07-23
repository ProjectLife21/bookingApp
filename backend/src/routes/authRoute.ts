import express from "express";

export const authRouter = express.Router();

// controllers
import {
  loginController,
  registerController,
} from "../controllers/authController";

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);
