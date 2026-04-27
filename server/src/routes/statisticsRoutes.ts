import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';
import { Wrapper } from '../utils/wrapper';
import {
  getClientGoods,
  getStatistics,
} from '../controllers/statisticsController';

const router = Router();

router.get('/', authenticate, Wrapper(getStatistics));
router.get('/:clientId/goods', authenticate, Wrapper(getClientGoods));

export default router;
