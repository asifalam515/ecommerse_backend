import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserModel } from "./user.model";
import bcrypt from 'bcrypt'

//authentication
const signUp = async (req: Request, res: Response) => {
  const newUser = await new UserModel({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password:
  });
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
export const userController = { createUser, getAllUsers };
