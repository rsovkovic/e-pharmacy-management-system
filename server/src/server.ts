import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import productRouter from './routes/productsRoutes';
import userRouter from './routes/authRoutes';
import { connectMongoDB } from './db/connectMongoDB';
import 'dotenv/config';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Pharmacy API is running...' });
});
app.use('/api/products', productRouter);
app.use('/api/user', userRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

startServer();
