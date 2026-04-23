import { Schema, model, models } from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  token?: string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ['admin', 'owner', 'user'],
      default: 'user',
    },
    token: { type: String, default: '' },
  },
  { timestamps: true, versionKey: false },
);

export const User = models.User || model('User', userSchema);
