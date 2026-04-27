import { Response, Request } from 'express';
import { Shop } from '../models/shop';
import { AuthRequest } from '../middleware/authenticate';

export const getShops = async (req: Request, res: Response) => {
  const result = await Shop.find();
  res.status(200).json(result);
};

export const getShopById = async (req: AuthRequest, res: Response) => {
  const { shopId } = req.params;
  const result = await Shop.findById(shopId);

  if (!result) {
    return res.status(404).json({ message: 'Shop not found' });
  }
  res.status(200).json(result);
};

export const createShop = async (req: AuthRequest, res: Response) => {
  const { _id: owner } = req.user!;
  // Не забудь, що в ТЗ згадувався логотип.
  // Якщо поки передаєш просто URL рядком — це ок.
  const result = await Shop.create({ ...req.body, owner });
  res.status(201).json(result);
};

// export const updateShop = async (req: AuthRequest, res: Response) => {
//   const { shopId } = req.params;
//   const { _id: owner } = req.user!;

//   const result = await Shop.findOneAndUpdate({ _id: shopId, owner }, req.body, {
//     new: true,
//   });

//   if (!result) {
//     return res.status(404).json({ message: 'Shop not found or access denied' });
//   }

//   res.status(200).json(result);
// };

export const updateShop = async (req: AuthRequest, res: Response) => {
  const { shopId } = req.params;
  const { _id: owner } = req.user!;
  const { shopName, ownerName, email, phone, street, city, zip, hasDelivery } =
    req.body;

  const result = await Shop.findOneAndUpdate(
    { _id: shopId, owner },
    { shopName, ownerName, email, phone, street, city, zip, hasDelivery },
    { new: true, runValidators: true },
  );
  if (!result) {
    return res.status(404).json({ message: 'Shop not found or access denied' });
  }

  res.status(200).json(result);
};

export const deleteShop = async (req: AuthRequest, res: Response) => {
  const { shopId } = req.params;
  const { _id: owner } = req.user!;

  const result = await Shop.findOneAndDelete({ _id: shopId, owner });

  if (!result) {
    return res.status(404).json({ message: 'Shop not found or access denied' });
  }

  res.status(200).json({ message: 'Shop deleted successfully', id: shopId });
};
