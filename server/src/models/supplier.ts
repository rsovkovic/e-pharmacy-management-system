import { Schema, model, models } from 'mongoose';

export interface SupplierType {
  name: string;
  address: string;
  supplier: string;
  date: string;
  amount: string;
  status: string;
}

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
