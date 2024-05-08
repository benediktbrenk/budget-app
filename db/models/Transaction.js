import mongoose from "mongoose";

const { Schema, ObjectId } = mongoose;

const transactionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  amount: Number,
  currency: String,
  date: Date,
  description: String,
  category: String,
  paymentMethod: String,
  direction: String,
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
