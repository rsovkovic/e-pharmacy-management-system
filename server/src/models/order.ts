import { OrderType } from '../types/types';
import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema<OrderType>(
  {
    photo: { type: String },
    name: { type: String, required: true },
    address: { type: String },
    products: { type: String },
    price: { type: String },
    status: { type: String },
    order_date: { type: String },
  },
  { versionKey: false, timestamps: true },
);

export const Order = models.Order || model<OrderType>('Order', orderSchema);
