import { Schema, model, models } from 'mongoose';

export interface IncomeExpenseType {
  amount: string;
  name: string;
  type: string;
}

const incomeExpenseSchema = new Schema<IncomeExpenseType>(
  {
    name: { type: String, required: true },
    amount: { type: String, required: true },
    type: {
      type: String,
      enum: ['Income', 'Expense', 'Error'],
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const IncomeExpense =
  models.IncomeExpense ||
  model<IncomeExpenseType>(
    'IncomeExpense',
    incomeExpenseSchema,
    'Income-Expenses',
  );
