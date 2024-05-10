import {
  StyledButton,
  StyledItemContainer,
  StyledLink,
  StyledLabel,
  StyledButtonContainer,
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
      <article>
        <StyledDetailsContainer>
          <StyledItemContainer>
            <StyledLabel>Title:</StyledLabel>
            <p>{currentTransaction.name}</p>

            <StyledLabel>Amount:</StyledLabel>
            <p>
              {currentTransaction.direction === "Expense" ? "- " : "+ "}
              {currentTransaction.amount}
              {currentTransaction.currency}
            </p>

            <StyledLabel>Date:</StyledLabel>
            <p>{currentTransaction.date}</p>

            <StyledLabel>Description:</StyledLabel>
            <p>{currentTransaction.description}</p>

            <StyledLabel>Direction:</StyledLabel>
            <p>{currentTransaction.paymentMethod}</p>
          </StyledItemContainer>
        </StyledDetailsContainer>
        <StyledButtonContainer>
          <StyledButton onClick={() => setIsDeleteMode(!isDeleteMode)}>
            Delete
          </StyledButton>

          <StyledLink href={`/edit/${currentTransaction._id}`}>
            Edit Entry
          </StyledLink>
        </StyledButtonContainer>
      </article>
      {isDeleteMode && (
        <article>
          <StyledItemContainer>
            <p>Delete Entry:</p>
            <p>Are you sure?</p>
          </StyledItemContainer>
          <StyledButtonContainer>
            <StyledButton onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </StyledButton>
            <StyledButton
              onClick={() => deleteTransaction(currentTransaction._id)}
            >
              Delete
            </StyledButton>
          </StyledButtonContainer>
        </article>
      )}
    </main>
  );
}
