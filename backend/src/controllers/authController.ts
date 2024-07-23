import { Request, Response, NextFunction } from "express";

import User from "../models/User";

/*
URL: '/api/v1/auth/register
METHOD: POST
ACCESS: PUBLIC
*/
export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    let user = await User.findOne({ email });

    // if (user) {
    //   return res.status(400).json({ msg: "User already exists!" });
    // }

    user = new User({ email, password, firstName, lastName });
    await user.save();

    res.status(200).json({ msg: "Register user!" });
  } catch (error) {
    next(error);
  }
};

/*
URL: '/api/v1/auth/login
METHOD: POST
ACCESS: PUBLIC
*/
export const loginController = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Login user!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};
