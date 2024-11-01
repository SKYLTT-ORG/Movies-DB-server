import mongoose from "mongoose";

import { USER_ROLE, DEFAULT_USER_ROLE } from "../../constant.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type:String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: USER_ROLE,
    default: DEFAULT_USER_ROLE,
  },
});

// adding method in schema level
// presave hook
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(this.password, password);
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ userId: this.userId, role: role }, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });
};

userSchema.methods.verifyAuthToken = function (token) {
  try {
    return jwt.verify(token, process.env.JWT_TOKEN);
  } catch (error) {
    return null;
  }
};


const User = mongoose.model("User", userSchema);

export default User;
