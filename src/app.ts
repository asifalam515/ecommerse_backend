import cors from "cors";
import express, { Request, Response } from "express";
import { router } from "./modules/User/user.route";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", router);

export default app;
