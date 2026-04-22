import { Request, Response, NextFunction } from 'express';

interface HttpError extends Error {
  status?: number;
}

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Використовуємо твій логер pino (якщо він доступний) або console
  console.error(`[ERROR] ${req.method} ${req.url}: ${err.message}`);

  const isProd = process.env.NODE_ENV === 'production';
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message:
      isProd && statusCode === 500
        ? 'Something went wrong. Please try again later.'
        : err.message,
  });
};
