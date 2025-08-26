import { Request, Response } from "express";
import { UserModel } from "./user.model";
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

export const userController = { createUser };
