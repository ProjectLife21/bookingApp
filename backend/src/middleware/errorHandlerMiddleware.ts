import { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import { MongoError, MongoServerError } from "mongodb";

export const errorHandleMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error.ValidationError) {
    const messages = Object.values(err.errors).map((err) => err.message);
    return res.status(400).json({
      success: false,
      message: "Could not create user due to some invalid fields!",
      error: messages,
    });
  } else if ((err as MongoError).code === 11000) {
    return res.status(400).json({
      success: false,
      message: `${Object.keys(
        (err as MongoServerError).keyValue
      )} field has to be unique`,
    });
  }

  res
    .status(500)
    .json({ success: false, message: "Internal server error", err });
};
