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
    <CardContainer key={transaction.id}>
      <CardLink href={`/details/${transaction.id}`}>
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
      </CardLink>
    </CardContainer>
  );
}

export default TransactionCard;
