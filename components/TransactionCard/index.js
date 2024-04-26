import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: lightgray;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
