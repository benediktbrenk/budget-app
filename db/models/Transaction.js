import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema({
  name: String,
  amount: Number,
  currency: String,
  date: String,
  description: String,
  category: String,
  paymentMethod: String,
  direction: String,
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
