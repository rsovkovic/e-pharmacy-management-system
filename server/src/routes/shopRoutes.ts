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
import { shopSchema } from '../validations/validationSchemas';

const router = express.Router();

router.use(authenticate);

router.get('/', Wrapper(getShops));
router.post('/create', validateBody(shopSchema), Wrapper(createShop));
router.get('/:shopId', Wrapper(getShopById));
router.put('/:shopId/update', validateBody(shopSchema), Wrapper(updateShop));

export default router;

//"_id": "69ee0ccd1a266097aabbb914"
