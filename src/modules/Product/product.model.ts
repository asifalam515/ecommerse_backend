import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { productController } from "./product.controller";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    brand: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [
      {
        type: String, // store image URLs
      },
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// query helper
productSchema.query = {
  cheapProduct: function () {
    return this.find({ price: { $lt: 8 } });
  },
};
// static methods
productSchema.statics = {
  findGoodProduct: function () {
    return this.find({ rating: { $gt: 4 } });
  },
};

// instance methods
productSchema.methods = {
  findEmptyStock: function () {
    return mongoose.model("Product").find({ stock: 0 });
  },
};
export const Product = mongoose.model<TProduct>("Product", productSchema);
