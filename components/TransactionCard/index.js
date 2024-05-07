import React from "react";
import {
  AmountContainer,
  CardContainer,
  CardLink,
  ColorField,
  ContentContainer,
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
        <AmountContainer direction={transaction.direction}>
          <p>
            {transaction.direction === "Expense" ? "- " : "+ "}
            {transaction.amount}
            {transaction.currency}
          </p>
        </AmountContainer>
      </CardContainer>
    </CardLink>
  );
}

export default TransactionCard;
