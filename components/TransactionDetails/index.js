import { categories } from "@/utils/categories";
import { Button } from "../Button/Button.styled";
import * as Styled from "./TransactionDetails.styled";
import { useState } from "react";
import Modal from "../Modal";

export default function TransactionDetails({
  currentTransaction,
  deleteTransaction,
  flip,
  setFlip,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === currentTransaction.category
  );

  return (
    <>
      <Modal showModal={showDeleteModal}>
        <Styled.ModalTitle>
          Are you sure you want to delete this transaction?
        </Styled.ModalTitle>
        <Button
          type="button"
          $textColor="white"
          onClick={() => setShowDeleteModal(false)}
        >
          No, keep it
        </Button>
        <Button
          type="button"
          $type="danger"
          $textColor="white"
          onClick={() => deleteTransaction(currentTransaction._id)}
        >
          Yes, delete
        </Button>
      </Modal>
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

            <Styled.Label>Category:</Styled.Label>
            <Styled.ItemText>{currentTransaction.category}</Styled.ItemText>

            <Styled.Label>Description:</Styled.Label>
            <Styled.ItemText>{currentTransaction.description}</Styled.ItemText>
          </Styled.ItemContainer>
        </Styled.DetailsCard>
        <Styled.ButtonContainer>
          <Button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            $type="danger"
            $textColor="white"
          >
            Delete
          </Button>
          <Button
            type="button"
            $textColor="white"
            onClick={() => setFlip(!flip)}
          >
            Edit
          </Button>
        </Styled.ButtonContainer>
      </Styled.DetailsContainer>
    </>
  );
}
