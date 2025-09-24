import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserModel } from "./user.model";
import bcrypt from "bcrypt";

//authentication
const signUp = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.users.password, 10);
    const newUser = new UserModel({
      name: req.body.users.name,
      role: req.body.users.role,
      email: req.body.users.email,
      phoneNumber: req.body.users.phoneNumber,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "sign Up was successful!",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// routes .................
const createUser = async (req: Request, res: Response) => {
  const user = req.body.users;
  const newUser = await userService.createUserIntoDB(user);
  res.status(200).json({
    success: true,
    message: "User created",
    data: newUser,
  });
};
const getAllUsers = async (req: Request, res: Response) => {
  const result = await userService.getUsersFromDB();
  res.status(200).json({
    success: true,
    message: "retrieve all users",
    data: result,
  });
};
export const userController = { createUser, getAllUsers, signUp };
