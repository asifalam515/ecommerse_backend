import cors from "cors";
import express, { Request, Response } from "express";
import { router } from "./modules/User/user.route";
import { productRoute } from "./modules/Product/product.route";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", router);
app.use("/api/v1/product", productRoute);

export default app;
