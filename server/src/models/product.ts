import { Schema, model, models } from 'mongoose';

export interface ProductType {
  id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
}

const ProductSchema = new Schema<ProductType>(
  {
    photo: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    suppliers: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product =
  models.Product || model<ProductType>('Product', ProductSchema);
