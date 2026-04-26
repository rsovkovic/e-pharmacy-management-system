import express from 'express';
import { getAllProducts } from '../controllers/productsController';
import { Wrapper } from '../utils/wrapper';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.use(authenticate);

router.get('/', Wrapper(getAllProducts));

export default router;
