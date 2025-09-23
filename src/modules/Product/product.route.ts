import express from "express";
import { productController } from "./product.controller";
export const productRoute = express.Router();
productRoute.post("/create-product", productController.createProduct);
productRoute.get("/:productId", productController.getSingleProduct);
productRoute.get("/", productController.getAllProducts);
productRoute.get("/:productId", productController.getSingleProduct);
