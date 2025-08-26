import mongoose, { Schema, model, connect } from "mongoose";
import { TUser } from "./user.interface";
const useSchema = new Schema<TUser>({
  name: {
    firstName: String,
    lastName: String,
  },
  role: {
    type: String,
    enum: ["admin", "customer"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  password: String,
  address: {
    type: String,
    required: false,
  },
});
export const UserModel = mongoose.model("User", useSchema);
