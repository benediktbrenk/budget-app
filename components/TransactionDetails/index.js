import { categories } from "@/utils/categories";
import { Button } from "../Button/Button.styled";
import { StyledLink } from "../Link/Link.styled";
import * as Styled from "./TransactionDetails.styled";
import { useState } from "react";

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
  showModal, setShowModal
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === currentTransaction.category,
  );

  return (
    <> <Styled.DetailsContainer $showModal={showModal}>
      <Styled.DetailsCard
          $color={currentCategory.color}
          $softColor={currentCategory.softColor}
          $showModal={showModal}>
        
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
            onClick={() => setIsDeleteMode(!isDeleteMode)}
            $type="danger"
            $textColor="white"
          >
            Delete
          </Button>

          <Button onClick={() => setShowModal(true)} >Edit
          </Button>
        </Styled.ButtonContainer>
      </Styled.DetailsContainer>
      
      {isDeleteMode && (
        <section>
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

        </section>
      )}
    </>
  );
}
