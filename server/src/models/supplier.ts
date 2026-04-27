import { SupplierType } from '../types/types';
import { Schema, model, models } from 'mongoose';

const supplierSchema = new Schema<SupplierType>(
  {
    name: { type: String, required: true },
    address: { type: String },
    supplier: { type: String },
    date: { type: String },
    amount: { type: String },
    status: { type: String },
  },
  { versionKey: false, timestamps: true },
);

export const Supplier =
  models.Supplier || model<SupplierType>('Supplier', supplierSchema);
