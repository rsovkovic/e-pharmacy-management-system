import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/authenticate';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { Supplier } from '../models/supplier';
import { Order } from '../models/order';
import { IncomeExpense } from '../models/incomeExpense';
import { Review } from '../models/reviews';

// export const getStatistics = async (req: AuthRequest, res: Response) => {
//   const [productsCount, customersCount, suppliersCount] = await Promise.all([
//     Product.countDocuments(),
//     Customer.countDocuments(),
//     Supplier.countDocuments(),
//   ]);

//   const recentCustomers = await Customer.find().sort({ _id: -1 }).limit(5);

//   res.status(200).json({
//     summary: {
//       products: productsCount,
//       customers: customersCount,
//       suppliers: suppliersCount,
//     },
//     recentCustomers,
//   });
// };

export const getStatistics = async (req: AuthRequest, res: Response) => {
  const [productsCount, customersCount, suppliersCount, transactions, reviews] =
    await Promise.all([
      Product.countDocuments(),
      Customer.countDocuments(),
      Supplier.countDocuments(),
      IncomeExpense.find().sort({ _id: -1 }).limit(6),
      Review.find().limit(3),
    ]);

  const recentCustomers = await Customer.find().sort({ _id: -1 }).limit(5);

  res.status(200).json({
    summary: {
      products: productsCount,
      customers: customersCount,
      suppliers: suppliersCount,
    },
    recentCustomers,
    incomeExpenses: transactions,
    reviews,
  });
};

// export const getClientGoods = async (req: AuthRequest, res: Response) => {
//   const { clientId } = req.params;
//   const customer = await Customer.findById(clientId);

//   if (!customer) {
//     return res.status(404).json({ message: 'Customer not found' });
//   }
//   const orders = await Order.find({ name: customer.name });
//   const goods = await Product.find().limit(5);

//   res.status(200).json(goods);
// };

//////////////////////////////////

export const getClientGoods = async (req: AuthRequest, res: Response) => {
  const { clientId } = req.params;

  const customer = await Customer.findById(clientId);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  const goods = await Product.find().limit(3);

  const formattedGoods = goods.map((product) => ({
    _id: product._id,
    name: product.name,
    photo: product.photo,
    price: product.price,
    description: `High-quality medicine in the ${product.category.toLowerCase()} category, supplied by ${product.suppliers}.`,
  }));

  res.status(200).json(formattedGoods);
};

// export const getClientGoods = async (req: AuthRequest, res: Response) => {
//   const { clientId } = req.params;
//   const customer = await Customer.findById(clientId);

//   if (!customer) {
//     return res.status(404).json({ message: 'Customer not found' });
//   }
//   const goods = await Product.find().limit(5);

//   res.status(200).json(goods);
// };
