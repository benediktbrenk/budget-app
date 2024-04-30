import styled from "styled-components";
import { StyledItemContainer } from "./TransactionDetails.styled";
import { StyledDetailsContainer } from "./TransactionDetails.styled";
import { useState } from "react";

const StyledButton = styled.button`
  height: 2rem;
  width: 5rem;
  border-radius: 8px;
  background-color: lightgray;
  border: solid 1px lightgray;
`;

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
}) {
  const [isAktiv, setIsAktiv] = useState(false);

  function toggleDeleteQuery() {
    setIsAktiv(!isAktiv);
  }
  console.log(isAktiv);
  return (
    <main>
      {isAktiv ? (
        <article>
          <StyledDetailsContainer>
            <StyledItemContainer>
              <p>Delete Entry:</p>
              <p>Are you sure?</p>
            </StyledItemContainer>
          </StyledDetailsContainer>
          <StyledItemContainer>
            <StyledButton onClick={toggleDeleteQuery}>Cancel</StyledButton>
            <StyledButton
              onClick={() => deleteTransaction(currentTransaction.id)}
            >
              Delete
            </StyledButton>
          </StyledItemContainer>
        </article>
      ) : (
        <article>
          <StyledDetailsContainer>
            <StyledItemContainer>
              <p>{currentTransaction.name}</p>
              <p>
                {currentTransaction.direction === "Expense" ? "- " : "+ "}
                {currentTransaction.amount}
                {currentTransaction.currency}
              </p>
            </StyledItemContainer>
            <StyledItemContainer>
              <p>{currentTransaction.date}</p>
              <p>{currentTransaction.paymentMethod}</p>
            </StyledItemContainer>
            <p>{currentTransaction.category}</p>
            <p>{currentTransaction.description}</p>
          </StyledDetailsContainer>
          <StyledButton onClick={toggleDeleteQuery}>Delete</StyledButton>
        </article>
      )}
    </main>
  );
}
