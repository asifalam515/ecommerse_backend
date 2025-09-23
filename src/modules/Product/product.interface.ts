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
  findEmptyStock(): Promise<TProduct[]>;
  findGoodReview: () => Promise<TProduct[]>;
};
