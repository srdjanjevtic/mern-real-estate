import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

export const signup = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({ username, password: hashedPassword, email });
  await newUser.save();
  return res
    .status(201)
    .json({ message: `User ${username} created successfully` });
});
