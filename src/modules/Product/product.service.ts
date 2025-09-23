import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};
export const productService = {
  createProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
