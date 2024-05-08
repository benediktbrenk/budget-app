import dbConnect from "@/db/connect.js";
import Transaction from "@/db/models/Transaction";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const transaction = await Transaction.findByID(id);

      if (!transaction) {
        return response.status(404).json({ status: "Not Found!" });
      }

      return response.status(200).json(transaction);
    }

    if (request.method === "PUT") {
      try {
        const updatedTransaction = request.body;
        await Transaction.findByIdAndUpdate(id, updatedTransaction);
        return response.status(200).json({ status: "Transaction updated." });
      } catch (error) {
        console.error(error);
        return response.status(400).json({ error: error.message });
      }
    }

    if (request.method === "DELETE") {
      try {
        await Transaction.findByIdAndDelete(id);
        return response.status(200).json({ status: "Transaction deleted." });
      } catch (error) {
        console.error(error);
        return response.status(400).json({ error: error.message });
      }
    }
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    return response.status(400).json({ error: "Internal Server Error" });
  }
}
