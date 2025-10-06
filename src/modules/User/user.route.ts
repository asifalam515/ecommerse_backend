import express, { Request, Response } from "express";
import { userController } from "./user.controller";
export const router = express.Router();
router.post("/sign-up", userController.signUp);
router.post("/login", userController.logIn);
router.post("/create-user", userController.createUser);
router.get("/users", userController.getAllUsers);
