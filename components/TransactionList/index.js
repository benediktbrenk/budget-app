import React from "react";
import TransactionCard from "../TransactionCard";
import { transactions } from "@/db/data.js";

function TransactionList() {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;
