import express from 'express';
import {
  createShop,
  getShopById,
  getShops,
  updateShop,
} from '../controllers/shopController';
import { authenticate } from '../middleware/authenticate';
import { Wrapper } from '../utils/wrapper';
import { validateBody } from '../utils/validateBody';
import { productSchema, shopSchema } from '../validations/validationSchemas';
import {
  addProduct,
  deleteProduct,
  getProductById,
  getProductsByShop,
  updateProduct,
} from '../controllers/productsController';

const router = express.Router();

router.use(authenticate);

router.get('/', Wrapper(getShops));
router.post('/create', validateBody(shopSchema), Wrapper(createShop));
router.get('/:shopId', Wrapper(getShopById));
router.put('/:shopId/update', validateBody(shopSchema), Wrapper(updateShop));
router.get('/:shopId/product', authenticate, Wrapper(getProductsByShop));
router.get(
  '/:shopId/product/:productId',
  authenticate,
  Wrapper(getProductById),
);
router.post(
  '/:shopId/product/add',
  authenticate,
  validateBody(productSchema),
  Wrapper(addProduct),
);
router.put(
  '/:shopId/product/:productId/edit',
  authenticate,
  validateBody(productSchema),
  Wrapper(updateProduct),
);
router.delete(
  '/:shopId/product/:productId/delete',
  authenticate,
  Wrapper(deleteProduct),
);

export default router;
