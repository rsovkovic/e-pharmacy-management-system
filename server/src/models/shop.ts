// import { Schema, model, models } from 'mongoose';

// export interface ShopType {
//   name: string;
//   address: string;
//   city: string;
//   phone: string;
//   rating: number;
//   owner: Schema.Types.ObjectId;
// }

// const shopSchema = new Schema<ShopType>(
//   {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     city: { type: String, required: true },
//     phone: { type: String, required: true },
//     rating: { type: Number, default: 0 },
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   },
// );

// export const Shop = models.Shop || model<ShopType>('Shop', shopSchema);

import { Schema, model, models } from 'mongoose';

export interface ShopType {
  shopName: string;
  ownerName: string;
  email: string;
  street: string;
  zip: string;
  name?: string;
  address?: string;
  city: string;
  phone: string;
  rating: number;
  hasDelivery: boolean;
  logoUrl?: string;
  owner: Schema.Types.ObjectId;
}

const shopSchema = new Schema<ShopType>(
  {
    shopName: { type: String },
    ownerName: { type: String },
    email: { type: String },
    phone: { type: String },
    street: { type: String },
    city: { type: String },
    zip: { type: String },
    hasDelivery: { type: Boolean, default: false },
    name: { type: String },
    address: { type: String },
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
