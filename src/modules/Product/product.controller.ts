import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body.products;
  try {
    const newProduct = await productService.createProductToDB(productData);
    res.status(200).json({
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};
export const productController = { createProduct };
