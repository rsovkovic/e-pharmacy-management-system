import { ProductType } from '../types/types';
import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema<ProductType>(
  {
    photo: {
      type: String,
      default: 'https://via.placeholder.com/300?text=No+Image',
    },
    name: { type: String, required: true, trim: true },
    suppliers: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product =
  models.Product || model<ProductType>('Product', ProductSchema);
