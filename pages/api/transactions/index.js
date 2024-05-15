import dbConnect from "@/db/connect.js";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  try {
    if (request.method === "GET") {

      if (session) {
        const transactions = await Transaction.find({
          author: session.user.email,
        });
        return response.status(200).json(transactions);
      } else {
        const transactions = await Transaction.find();
        return response.status(200).json(transactions);
      }
    } else if (request.method === "POST") {
      if (session) {
        const transactionData = request.body;
        await Transaction.create({
          ...transactionData,
          author: session.user.email,
        });
        response.status(201).json({ status: "Transaction created" });
      } else {
        response.status(401).json({ status: "Not authorized" });
      }
    }
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    return response.status(400).json({ error: "Internal Server Error" });
  }
}
