import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["income", "expense"], // It will allow Only 'income' or 'expense'
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
