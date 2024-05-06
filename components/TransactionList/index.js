import React from "react";
import TransactionCard from "../TransactionCard";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: min(100% - 50px, 395px - 50px);
`;

function TransactionList({ transactions }) {
  return (
    <Ul>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </Ul>
  );
}

export default TransactionList;
