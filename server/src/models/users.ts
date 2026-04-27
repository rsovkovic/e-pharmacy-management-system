import { IUser } from '../types/types';
import { Schema, model, models } from 'mongoose';

export interface IUserModel extends IUser {
  password: string;
}

const userSchema = new Schema<IUserModel>(
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

export const User = models.User || model<IUserModel>('User', userSchema);
