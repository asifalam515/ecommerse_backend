import { Types } from "mongoose";

export type TUser = {
  role: "admin" | "customer";
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phoneNumber?: string;
  password: string;
  carts: Types.ObjectId[];
  status: "active" | "blocked";
  address?: string;
  createdAt: Date;
  updatedAt: Date;
};
