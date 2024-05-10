import * as Styled from "./TransactionDetails.styled";
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
          <Styled.DetailsContainer>
            <Styled.ItemContainer>
              <p>Delete Entry:</p>
              <p>Are you sure?</p>
            </Styled.ItemContainer>
          </Styled.DetailsContainer>
          <Styled.ItemContainer>
            <Styled.Button onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </Styled.Button>
            <Styled.ButtonContainer>
              <Styled.Button
                onClick={() => deleteTransaction(currentTransaction._id)}
              >
                Delete
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.ItemContainer>
        </article>
      ) : (
        <article>
          <Styled.DetailsContainer>
            <Styled.ItemContainer>
              <p>{currentTransaction.name}</p>
              <p>
                {currentTransaction.direction === "Expense" ? "- " : "+ "}
                {currentTransaction.amount}
                {currentTransaction.currency}
              </p>
            </Styled.ItemContainer>
            <Styled.ItemContainer>
              <p>{currentTransaction.date}</p>
              <p>{currentTransaction.paymentMethod}</p>
            </Styled.ItemContainer>
            <p>{currentTransaction.category}</p>
            <p>{currentTransaction.description}</p>
          </Styled.DetailsContainer>
          <Styled.ItemContainer>
            <Styled.Button onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Delete
            </Styled.Button>
            <Styled.ButtonContainer>
              <Styled.EditLink href={`/edit/${currentTransaction._id}`}>
                Edit Entry
              </Styled.EditLink>
            </Styled.ButtonContainer>
          </Styled.ItemContainer>
        </article>
      )}
    </main>
  );
}
