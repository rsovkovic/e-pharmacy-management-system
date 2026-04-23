import express from 'express';
import { register } from '../controllers/authController';
import { validateBody } from '../middleware/authenticate';
import { registerSchema } from '../validations/validationSchemas';
import { Wrapper } from '../utils/wrapper';

const router = express.Router();

router.post('/register', validateBody(registerSchema), Wrapper(register));

export default router;
