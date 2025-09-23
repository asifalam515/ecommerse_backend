import express from "express";
import { productController } from "./product.controller";
export const productRoute = express.Router();
// find empty stock
productRoute.get("/best-rating", productController.bestRating);
productRoute.get("/empty", productController.checkIsEmpty);
productRoute.post("/create-product", productController.createProduct);
productRoute.get("/:productId", productController.getSingleProduct);
productRoute.get("/", productController.getAllProducts);
productRoute.put("/:productId", productController.updateProduct);
productRoute.delete("/:productId", productController.deleteProduct);
