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
      <StyledLi key={transaction.id}>
        <StyledItemContainer>
          <p>{transaction.name}</p>
          <p>
            {transaction.direction === "Expense" ? "- " : "+ "}
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
