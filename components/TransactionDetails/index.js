import {
  StyledButton,
  StyledDiv,
  StyledItemContainer,
  StyledLink,
} from "./TransactionDetails.styled";
import { StyledDetailsContainer } from "./TransactionDetails.styled";
import { useState } from "react";

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  return (
    <main>
      {isDeleteMode ? (
        <article>
          <StyledDetailsContainer>
            <StyledItemContainer>
              <p>Delete Entry:</p>
              <p>Are you sure?</p>
            </StyledItemContainer>
          </StyledDetailsContainer>
          <StyledItemContainer>
            <StyledButton onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </StyledButton>
            <StyledDiv>
              <StyledButton
                onClick={() => deleteTransaction(currentTransaction.id)}
              >
                Delete
              </StyledButton>
            </StyledDiv>
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
          <StyledItemContainer>
            <StyledButton onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Delete
            </StyledButton>
            <StyledDiv>
              <StyledLink href={`../edit/${currentTransaction.id}`}>
                Edit Entry
              </StyledLink>
            </StyledDiv>
          </StyledItemContainer>
        </article>
      )}
    </main>
  );
}
