import { Schema, model, models } from 'mongoose';

export interface ShopType {
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  owner: Schema.Types.ObjectId;
}

const shopSchema = new Schema<ShopType>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    rating: { type: Number, default: 0 },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Shop = models.Shop || model<ShopType>('Shop', shopSchema);
