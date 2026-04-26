import { Request, Response } from 'express';
import { Product } from '../models/product';
import { AuthRequest } from '../middleware/authenticate';

export const getAllProducts = async (req: Request, res: Response) => {
  const data = await Product.find();
  res.status(200).json(data);
};

// export const getProductsByShop = async (req: Request, res: Response) => {
//   const { shopId } = req.params;
//   const result = await Product.find({ shopId });

//   res.status(200).json(result);
// };

export const getProductsByShop = async (req: Request, res: Response) => {
  const { shopId } = req.params;

  const products = await Product.find({ shopId });
  const categories = [...new Set(products.map((p) => p.category))];

  res.status(200).json({
    products,
    categories,
  });
};
export const addProduct = async (req: AuthRequest, res: Response) => {
  const { shopId } = req.params;
  const newProduct = {
    ...req.body,
    shopId,
  };

  const result = await Product.create(newProduct);
  res.status(201).json(result);
};
export const getProductById = async (req: AuthRequest, res: Response) => {
  const { shopId, productId } = req.params;
  const result = await Product.findById({
    _id: productId,
    shopId: shopId,
  });
  if (!result) {
    return res.status(404).json({ message: 'Product not found in this shop' });
  }
  res.status(200).json(result);
};

export const updateProduct = async (req: AuthRequest, res: Response) => {
  const { shopId, productId } = req.params;
  const result = await Product.findOneAndUpdate(
    { _id: productId, shopId },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!result) {
    return res.status(404).json({ message: 'Product not found in this shop' });
  }
  res.status(200).json(result);
};

export const deleteProduct = async (req: AuthRequest, res: Response) => {
  const { shopId, productId } = req.params;
  const result = await Product.findOneAndDelete(
    { _id: productId, shopId: shopId },
    req.body,
  );
  if (!result) {
    return res.status(404).json({ message: 'Product not found in this shop' });
  }
  res.status(200).json({
    message: 'Product deleted successfully',
    id: productId,
  });
};
