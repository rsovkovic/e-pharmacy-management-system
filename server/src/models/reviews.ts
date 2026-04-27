import { ReviewsType } from '../types/types';
import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema<ReviewsType>({
  name: { type: String },
  testimonial: { type: String },
});

export const Review =
  models.Review || model<ReviewsType>('Review', reviewSchema);
