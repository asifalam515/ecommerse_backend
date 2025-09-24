import mongoose from "mongoose";

export type TProduct = {
  name: string;
  description?: string;
  price: number;
  category: string;
  brand?: string;
  stock: number;
  images: string[];
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
  findGoodProduct: () => Promise<TProduct[]>;
  findEmptyStock(): Promise<TProduct[]>;
  cheapProduct: any;
};
export type ProductQueryHelpers = {
  cheapProduct(): mongoose.Query<TProduct[], TProduct, ProductQueryHelpers>;
};
