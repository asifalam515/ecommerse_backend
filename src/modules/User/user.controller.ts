import { Request, Response } from "express";
import { userService } from "./user.service";
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
