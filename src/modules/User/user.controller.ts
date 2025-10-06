import { Request, Response } from "express";
import { userService } from "./user.service";
import { UserModel } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Product } from "../Product/product.model";

// add to cart
const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body;
    //check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // update user cart
    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        $addToSet: { carts: productId },
      },
      { new: true }
    ).populate("carts");
    res.status(200).json({
      success: true,
      message: "Product added to cart",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
  }
};

// get user and carts
export const getUserWithCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await UserModel.findById(userId).populate("carts"); // fetch product details

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
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
// login
const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.find({ email });
    if (user && user.length > 0) {
      const isvalidPassword = await bcrypt.compare(password, user[0].password);
      if (isvalidPassword) {
        // we are going to give jwt token
        //generate token
        const token = jwt.sign(
          {
            username: user[0].name.firstName,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          "access-token": token,
          message: "login successful",
        });
      } else {
        res.status(401).json({
          message: "authentication failed",
        });
      }
    } else {
      res.status(401).json({
        message: "authentication failed",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: " something went wrong  while authentication",
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
export const userController = {
  createUser,
  getAllUsers,
  signUp,
  logIn,
  addToCart,
  getUserWithCart,
};
