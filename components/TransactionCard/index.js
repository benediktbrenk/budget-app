import React, { useState } from "react";
import * as Styled from "./TransactionCard.styled";
import Modal from "../Modal";
import { categories } from "@/utils/categories";
import TransactionEntryForm from "../TransactionEntryForm";
import { Button } from "../Button/Button.styled";

function TransactionCard({
  transaction,
  deleteTransaction,
  updateTransactions,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === transaction.category
  );

  function handleDelete() {
    deleteTransaction(id);
    setShowDeleteModal(false);
  }

  return (
    <>
      <Styled.CardContainer
        key={transaction._id}
        category={transaction.category}
        $color={currentCategory.softColor}
      >
        <Modal showModal={showEditModal}>
          <TransactionEntryForm
            updateTransactions={updateTransactions}
            setShowModal={setShowEditModal}
            currentTransaction={transaction}
            mode="edit"
            id={transaction._id}
          />
        </Modal>

        <Modal showModal={showDeleteModal}>
          <Styled.ModalTitle>Do you really want to delete?</Styled.ModalTitle>
          <Button $type="cancel" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button $type="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal>

        <Styled.ColorField $color={currentCategory.color} />
        <Styled.ContentContainer>
          <Styled.TransactionName href={`/details/${transaction._id}`}>
            {transaction.name}
          </Styled.TransactionName>
          <Styled.TransactionDate>{transaction.date}</Styled.TransactionDate>
          <Styled.BottomContainer>
            <Styled.ActionLinkContainer>
              <Styled.ActionLink href={`/details/${transaction._id}`}>
                <Styled.ActionInfo />
              </Styled.ActionLink>
              <Styled.ActionButton onClick={() => setShowEditModal(true)}>
                <Styled.ActionDetails />
              </Styled.ActionButton>
              <Styled.ActionButton onClick={() => setShowDeleteModal(true)}>
                <Styled.ActionDelete />
              </Styled.ActionButton>
            </Styled.ActionLinkContainer>
            <Styled.Amount
              href={`/details/${transaction._id}`}
              $direction={transaction.direction}
            >
              {transaction.direction === "Expense" ? "- " : "+ "}
              {transaction.amount}
              {transaction.currency}
            </Styled.Amount>
          </Styled.BottomContainer>
        </Styled.ContentContainer>
      </Styled.CardContainer>
    </>
  );
}

export default TransactionCard;
