import React from "react";
import TransactionCard from "../TransactionCard";

function TransactionList({ data }) {
  return (
    <ul>
      {data.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;
