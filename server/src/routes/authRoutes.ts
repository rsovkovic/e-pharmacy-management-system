import express from 'express';
import {
  getCurrentUser,
  login,
  logout,
  register,
} from '../controllers/authController';
import { validateBody } from '../utils/validateBody';
import { loginSchema, registerSchema } from '../validations/validationSchemas';
import { Wrapper } from '../utils/wrapper';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.post('/register', validateBody(registerSchema), Wrapper(register));
router.post('/login', validateBody(loginSchema), Wrapper(login));
router.post('/logout', authenticate, Wrapper(logout));
router.get('/user-info', authenticate, Wrapper(getCurrentUser));

export default router;
