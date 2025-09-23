import { Request, Response } from "express";
import { productService } from "./product.service";
import { Product } from "./product.model";

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
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();
    res.status(200).json({
      succss: true,
      message: "All Product retrieve",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  const productId: string = req.params.productId;
  try {
    const result = await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "single product retrieve",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  const productId: string = req.params.productId;
  const updatedData = req.body;
  try {
    const result = await productService.updateProductFromDB(
      productId,
      updatedData
    );
    res.status(200).json({
      success: true,
      message: "Updated Product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const productId: string = req.params.productId;

  try {
    const result = await productService.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product Deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};

//static method
const bestRating = async (req: Request, res: Response) => {
  const data = await Product.findGoodProduct();
  res.status(200).json({
    message: "good products that have more than 4 review",
    data: data,
  });
};
// instance method
const checkIsEmpty = async (req: Request, res: Response) => {
  const product = new Product();
  const data = await product.findEmptyStock();
  res.status(200).json({
    data: data,
  });
};

// static methods

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  checkIsEmpty,
  bestRating,
};
