import React from "react";
import * as Styled from "./TransactionCard.styled";

function TransactionCard({ transaction }) {
  return (
    <Styled.CardContainer key={transaction._id}>
      <Styled.CardLink href={`/details/${transaction._id}`}>
        <Styled.ColorField category={transaction.category}></Styled.ColorField>
        <Styled.ContentContainer>
          <Styled.TransactionName>{transaction.name}</Styled.TransactionName>
          <Styled.TransactionDate>{transaction.date}</Styled.TransactionDate>
        </Styled.ContentContainer>

        <Styled.TransactionAmount direction={transaction.direction}>
          {transaction.direction === "Expense" ? "- " : "+ "}
          {transaction.amount}
          {transaction.currency}
        </Styled.TransactionAmount>
      </Styled.CardLink>
    </Styled.CardContainer>
  );
}

export default TransactionCard;
