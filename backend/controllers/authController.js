import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

async function register(req, res, next) {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);

    const newUser = User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    res.status(201).send("User has been created");
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong password or username"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
}

async function logout(req, res) {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
}

export { register, login, logout };
