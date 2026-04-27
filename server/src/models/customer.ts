import { Schema, model, models } from 'mongoose';
import { CustomerType } from '../types/types';

const customerSchema = new Schema<CustomerType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String },
    spent: { type: String },
    phone: { type: String },
    address: { type: String },
    register_date: { type: String },
  },
  { versionKey: false, timestamps: true },
);

export const Customer =
  models.Customer || model<CustomerType>('Customer', customerSchema);
