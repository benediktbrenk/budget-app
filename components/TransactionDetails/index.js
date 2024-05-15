import * as Styled from "./TransactionDetails.styled";
import { useRouter } from "next/router";
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
          <Styled.Button onClick={() => setIsDeleteMode(!isDeleteMode)}>
            Delete
          </Styled.Button>

          <Styled.EditLink href={`/edit/${currentTransaction._id}`}>
            Edit Entry
          </Styled.EditLink>
        </Styled.ButtonContainer>
      </article>
      {isDeleteMode && (
        <article>
          <Styled.ItemContainer>
            <p>Delete Entry:</p>
            <p>Are you sure?</p>
          </Styled.ItemContainer>
          <Styled.ButtonContainer>
            <Styled.Button onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </Styled.Button>
            <Styled.Button
              onClick={() => deleteTransaction(currentTransaction._id)}
            >
              Delete
            </Styled.Button>
          </Styled.ButtonContainer>
        </article>
      )}
    </main>
  );
}
