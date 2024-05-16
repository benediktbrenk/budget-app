import React, { useState } from "react";
import * as Styled from "./TransactionCard.styled";
import ModalDelete from "../ModalDelete";
import Modal from "../Modal";
import { categories } from "@/utils/categories";
import TransactionEntryForm from "../TransactionEntryForm";

function TransactionCard({ transaction, deleteTransaction }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const currentCategory = categories.find(
    (category) => category.name === transaction.category,
  );

  return (
    <>
    <Styled.CardContainer
      key={transaction._id}
      category={transaction.category}
      $color={currentCategory.softColor}
    >   
    <Modal showModal={showEditModal}>
    <TransactionEntryForm
setShowModal={setShowEditModal}
currentTransaction={transaction}
/></Modal>

      <ModalDelete
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        deleteTransaction={deleteTransaction}
        id={transaction._id}
      />

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
  </>)
}

export default TransactionCard;
