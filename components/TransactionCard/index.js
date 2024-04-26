import React from "react";
import { StyledItemContainer, StyledLi } from "./TransactionCard.styled";

function TransactionCard({ transaction }) {
  return (
    <StyledLi>
      <StyledItemContainer>
        <p>{transaction.name}</p>
        <p>
          {transaction.direction === "expense" ? "- " : "+ "}
          {transaction.amount}
          {transaction.currency}
        </p>
      </StyledItemContainer>
      <StyledItemContainer>
        <p>{transaction.date}</p>
      </StyledItemContainer>
    </StyledLi>
  );
}

export default TransactionCard;
