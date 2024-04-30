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

  function toggleDeleteQuestion() {
    setIsAktiv(!isAktiv);
  }
  console.log(isAktiv);
  return (
    <main>
      {isAktiv ? (
        <div>
          <StyledDetailsContainer>
            <StyledItemContainer>
              <p>Delete Entry</p>
              <p>Are you sure?</p>
            </StyledItemContainer>
          </StyledDetailsContainer>
          <StyledButton onClick={toggleDeleteQuestion}>Cancel</StyledButton>
          <StyledButton
            onClick={() => deleteTransaction(currentTransaction.id)}
          >
            Delete
          </StyledButton>
        </div>
      ) : (
        <div>
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
          <StyledButton onClick={toggleDeleteQuestion}>Delete</StyledButton>
        </div>
      )}
    </main>
  );
}
// onClick={() => deleteTransaction(currentTransaction.id)}
