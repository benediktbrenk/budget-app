import { categories } from "@/utils/categories";
import { Button } from "../Button/Button.styled";
import * as Styled from "./TransactionDetails.styled";
import { useState } from "react";

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
  flip,
  setFlip,
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === currentTransaction.category
  );

  return (
    <Styled.DetailsContainer>
      <Styled.DetailsCard
        $color={currentCategory.color}
        $softColor={currentCategory.softColor}
      >
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
      </Styled.DetailsCard>
      <Styled.ButtonContainer>
        <Button
          type="button"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
          $type="danger"
          $textColor="white"
        >
          Delete
        </Button>
        <Button type="button" $textColor="white" onClick={() => setFlip(!flip)}>
          Edit
        </Button>
      </Styled.ButtonContainer>
      {isDeleteMode && (
        <section>
          <Styled.ItemContainer>
            <p>Delete Entry:</p>
            <p>Are you sure?</p>
          </Styled.ItemContainer>

          <Styled.ButtonContainer>
            <Button
              type="button"
              $textColor="white"
              onClick={() => setIsDeleteMode(!isDeleteMode)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              $type="danger"
              $textColor="white"
              onClick={() => deleteTransaction(currentTransaction._id)}
            >
              Delete
            </Button>
          </Styled.ButtonContainer>
        </section>
      )}
    </Styled.DetailsContainer>
  );
}
