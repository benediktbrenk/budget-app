import dbConnect from "@/db/connect.js";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ status: "Not authorized" });
  }

  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  try {
    if (request.method === "GET") {
      const transaction = await Transaction.findByID(id);

			if (!transaction) {
				return response.status(404).json({ status: "Not Found!" });
			}

			return response.status(200).json(transaction);
		}

		if (request.method === "PUT") {
			const updatedTransaction = request.body;
			await Transaction.findByIdAndUpdate(id, updatedTransaction);
			return response.status(200).json({ status: "Transaction updated." });
		}

		if (request.method === "DELETE") {
			await Transaction.findByIdAndDelete(id);
			return response.status(200).json({ status: "Transaction deleted." });
		}
	} catch (error) {
		console.error("Error fetching transactions:", error.message);
		return response.status(400).json({ error: "Internal Server Error" });
	}
}
