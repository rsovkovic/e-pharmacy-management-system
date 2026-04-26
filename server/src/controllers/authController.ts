import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/users';
import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/authenticate';

export const register = async (req: Request, res: Response) => {
  const { email, password, name, phone } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: 'Email already in use' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Email or password invalid' });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Email or password invalid' });
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '24h',
  });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

export const logout = async (req: AuthRequest, res: Response) => {
  const { _id } = req.user!;

  await User.findByIdAndUpdate(_id, { token: '' });

  res.status(204).json();
};

export const getCurrentUser = async (req: AuthRequest, res: Response) => {
  const { name, email, role, phone } = req.user!;

  res.status(200).json({
    name,
    email,
    role,
    phone,
  });
};
