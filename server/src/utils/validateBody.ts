import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';

export const validateBody = (schema: AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: error.errors,
        });
      }

      next(error);
    }
  };
};
