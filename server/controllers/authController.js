import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({ username, password: hashedPassword, email });
  try {
    await newUser.save();
    return res
      .status(201)
      .json({ message: `User ${username} created successfully` });
  } catch (error) {
    next(error);
  }
};
