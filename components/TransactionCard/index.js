import React from "react";
import {
  AmountContainer,
  CardContainer,
  CardLink,
  ColorField,
  ContentContainer,
  TransactionAmount,
  TransactionDate,
  TransactionName,
} from "./TransactionCard.styled";

function TransactionCard({ transaction }) {
  return (
    <CardLink href={`/details/${transaction.id}`}>
      <CardContainer key={transaction.id}>
        <ColorField category={transaction.category}></ColorField>
        <ContentContainer>
          <TransactionName>{transaction.name}</TransactionName>
          <TransactionDate>{transaction.date}</TransactionDate>
        </ContentContainer>

        <TransactionAmount direction={transaction.direction}>
          {transaction.direction === "Expense" ? "- " : "+ "}
          {transaction.amount}
          {transaction.currency}
        </TransactionAmount>
      </CardContainer>
    </CardLink>
  );
}

export default TransactionCard;
