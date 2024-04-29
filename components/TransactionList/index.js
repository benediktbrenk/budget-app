import React from "react";
import TransactionCard from "../TransactionCard";

function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;
