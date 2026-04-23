import bcrypt from 'bcryptjs';
import { User } from '../models/users';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  const { email, password, name, phone } = req.body;

  // 1. Перевірка на унікальність
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  // 2. Хешування пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Створення
  const newUser = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
};
