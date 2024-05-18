import dbConnect from "@/db/connect.js";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  try {
    if (!session) {
      response.status(401).json({ status: "Not authorized" });
      return;
    }

    if (request.method === "GET") {
      const transactions = await Transaction.find({
        author: session.user.email,
      });
      response.status(200).json(transactions);
      return;
    }

    if (request.method === "POST") {
      const transactionData = request.body;
      await Transaction.create({
        ...transactionData,
        author: session.user.email,
      });
      response.status(201).json({ status: "Transaction created" });
    }
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    response.status(400).json({ error: "Internal Server Error" });
    return;
  }
}
