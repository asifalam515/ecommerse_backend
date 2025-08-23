import cors from "cors";
import express, { Request, Response } from "express";
import { route } from "./modules/User/user.route";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", route);

export default app;
