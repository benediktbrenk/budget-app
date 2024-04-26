import React from "react";
import {
  StyledItemContainer,
  StyledLi,
  StyledLink,
} from "./TransactionCard.styled";
import Link from "next/link";

function TransactionCard({ transaction }) {
  return (
    <StyledLink href={`/details/${transaction.id}`}>
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
    </StyledLink>
  );
}

export default TransactionCard;
