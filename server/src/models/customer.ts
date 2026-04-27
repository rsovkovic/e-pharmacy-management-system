import { Schema, model, models } from 'mongoose';

export interface CustomerType {
  name: string;
  email: string;
  photo: string;
  spent: string;
  phone: string;
  address: string;
  register_date: string;
}

const customerSchema = new Schema<CustomerType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String },
    spent: { type: String }, // Зберігаємо як рядок, як у твоєму JSON
    phone: { type: String },
    address: { type: String },
    register_date: { type: String },
  },
  { versionKey: false, timestamps: true },
);

export const Customer =
  models.Customer || model<CustomerType>('Customer', customerSchema);
