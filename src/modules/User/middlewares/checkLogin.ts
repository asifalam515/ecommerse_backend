import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1];
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    );
    const { username, userId } = decoded;
    req.username = username;
    req.userId = userId;
    next();
  } catch (error) {
    next("authentication failed");
  }
};
