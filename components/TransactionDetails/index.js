import { Button } from "../Button/Button.styled";
import { StyledLink } from "../Link/Link.styled";
import * as Styled from "./TransactionDetails.styled";
import { useState } from "react";

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  return (
    <main>
      <article>
        <Styled.DetailsContainer>
          <Styled.ItemContainer>
            <Styled.Label>Title:</Styled.Label>
            <Styled.ItemText>{currentTransaction.name}</Styled.ItemText>

            <Styled.Label>Amount:</Styled.Label>
            <Styled.ItemText>
              {currentTransaction.direction === "Expense" ? "- " : "+ "}
              {currentTransaction.amount}
              {currentTransaction.currency}
            </Styled.ItemText>

            <Styled.Label>Date:</Styled.Label>
            <Styled.ItemText>{currentTransaction.date}</Styled.ItemText>

            <Styled.Label>Description:</Styled.Label>
            <Styled.ItemText>{currentTransaction.description}</Styled.ItemText>
          </Styled.ItemContainer>
        </Styled.DetailsContainer>
        <Styled.ButtonContainer>
          <Button
            onClick={() => setIsDeleteMode(!isDeleteMode)}
            $type="danger"
            $textColor="white"
          >
            Delete
          </Button>

          <StyledLink href={`/edit/${currentTransaction._id}`}>Edit</StyledLink>
        </Styled.ButtonContainer>
      </article>
      {isDeleteMode && (
        <article>
          <Styled.ItemContainer>
            <p>Delete Entry:</p>
            <p>Are you sure?</p>
          </Styled.ItemContainer>
          <Styled.ButtonContainer>
            <Button onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </Button>
            <Button
              onClick={() => deleteTransaction(currentTransaction._id)}
              $type="danger"
              $textColor="white"
            >
              Delete
            </Button>
          </Styled.ButtonContainer>
        </article>
      )}
    </main>
  );
}
