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
  isDarkModeOn,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === transaction.category
  );

  function handleDelete() {
    deleteTransaction(transaction._id);
    setShowDeleteModal(false);
  }

  return (
    <>
      <Modal showModal={showEditModal}>
        <TransactionEntryForm
          updateTransactions={updateTransactions}
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
          currentTransaction={transaction}
          mode="edit"
          id={transaction._id}
        />
      </Modal>

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
          onClick={handleDelete}
        >
          Yes,delete
        </Button>
      </Modal>
      <Styled.CardContainer
        key={transaction._id}
        $color={currentCategory.softColor}
        $isDarkModeOn={isDarkModeOn}
        $colorDark={currentCategory.softColorDark}
      >
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
              <Styled.ActionButton
                type="button"
                onClick={() => setShowEditModal(true)}
              >
                <Styled.ActionDetails />
              </Styled.ActionButton>
              <Styled.ActionButton
                type="button"
                onClick={() => setShowDeleteModal(true)}
              >
                <Styled.ActionDelete />
              </Styled.ActionButton>
            </Styled.ActionLinkContainer>
            <Styled.Amount
              $direction={transaction.direction}
              href={`/details/${transaction._id}`}
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
