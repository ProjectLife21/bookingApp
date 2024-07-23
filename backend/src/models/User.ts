import mongoose from "mongoose";

type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required!"] },
    firstName: { type: String, required: [true, "First name is required!"] },
    lastName: { type: String, required: [true, "Last name is required!"] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserType>("User", UserSchema);

export default User;
