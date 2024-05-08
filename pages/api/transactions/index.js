import dbConnect from "@/db/connect.js";
import Transaction from "@/db/models/Transaction";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const transactions = await Transaction.find();
      return response.status(200).json(transactions);
    }
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    return response.status(400).json({ error: "Internal Server Error" });
  }
}