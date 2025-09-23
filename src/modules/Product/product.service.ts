import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

export const productService = { createProductToDB };
