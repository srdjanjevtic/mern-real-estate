import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    avatar: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
