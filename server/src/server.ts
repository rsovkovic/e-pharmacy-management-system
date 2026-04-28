import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes';
import productRouter from './routes/productsRoutes';
import userRouter from './routes/authRoutes';
import shopRouter from './routes/shopRoutes';
import statisticsRouter from './routes/statisticsRoutes';
import { connectMongoDB } from './db/connectMongoDB';
import 'dotenv/config';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);
app.use(express.json());

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Pharmacy API is running...' });
});
app.get('/api/test-connection', (req: Request, res: Response) => {
  res.json({ message: "Бекенд на зв'язку! CORS не заважає." });
});

app.use('/api/user', authRouter);
app.use('/api/products', productRouter);
// app.use('/api/user', userRouter);
app.use('/api/shop', shopRouter);
app.use('/api/statistics', statisticsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

startServer();
