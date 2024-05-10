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
                onClick={() => deleteTransaction(currentTransaction._id)}
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
              <label>Title:</label>
              <p>{currentTransaction.name}</p>
              <p>
                {currentTransaction.direction === "Expense" ? "- " : "+ "}
                <label>Amount:</label>
                {currentTransaction.amount}
                {currentTransaction.currency}
              </p>
            </StyledItemContainer>
            <StyledItemContainer>
              <label>Date:</label>
              <p>{currentTransaction.date}</p>
            </StyledItemContainer>
            <label>Category:</label>
            <p>{currentTransaction.category}</p>
            <label>description</label>
            <p>{currentTransaction.description}</p>
            <label>Direction: </label>
            <p>{currentTransaction.paymentMethod}</p>
          </StyledDetailsContainer>
          <StyledItemContainer>
            <StyledButton onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Delete
            </StyledButton>
            <StyledDiv>
              <StyledLink href={`/edit/${currentTransaction._id}`}>
                Edit Entry
              </StyledLink>
            </StyledDiv>
          </StyledItemContainer>
        </article>
      )}
    </main>
  );
}
