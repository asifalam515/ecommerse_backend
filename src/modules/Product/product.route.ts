import express from "express";
import { productController } from "./product.controller";
export const productRoute = express.Router();
productRoute.post("/create-product", productController.createProduct);
