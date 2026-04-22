import express from 'express';
import { productsController } from '../controllers/productsController';

const router = express.Router();

router.get('/', productsController.getAll);

export default router;
