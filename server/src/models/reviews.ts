import { Schema, model, models } from 'mongoose';

export interface ReviewsType {
  name: string;
  testimonial: string;
}

const reviewSchema = new Schema<ReviewsType>({
  name: { type: String },
  testimonial: { type: String },
});

export const Review =
  models.Review || model<ReviewsType>('Review', reviewSchema);
