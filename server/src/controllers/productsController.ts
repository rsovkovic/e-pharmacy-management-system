import { Request, Response } from 'express';
import { Product } from '../models/product';
import { Wrapper } from '../utils/wrapper';

const getAllProducts = async (req: Request, res: Response) => {
  const data = await Product.find();
  res.status(200).json(data);
};

export const productsController = {
  getAll: Wrapper(getAllProducts),
};
