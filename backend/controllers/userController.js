import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

async function deleteUser(req, res, next) {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You cant delete only your account!"))
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted");
}

async function getUser(req, res, next) {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
}

export { deleteUser, getUser };
