import { Schema, model, models } from 'mongoose';

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
  },
  { timestamps: true, versionKey: false },
);

export const User = models.User || model('User', userSchema);
