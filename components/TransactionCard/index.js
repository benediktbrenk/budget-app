import React, { useState } from "react";
import * as Styled from "./TransactionCard.styled";
import ModalDelete from "../ModalDelete";

function TransactionCard({ transaction, deleteTransaction }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Styled.CardContainer key={transaction._id}>
      <ModalDelete
        showModal={showModal}
        setShowModal={setShowModal}
        deleteTransaction={deleteTransaction}
        id={transaction._id}
      ></ModalDelete>

      <Styled.ColorField category={transaction.category}></Styled.ColorField>
      <Styled.ContentContainer>
        <Styled.TransactionName>{transaction.name}</Styled.TransactionName>
        <Styled.TransactionDate>{transaction.date}</Styled.TransactionDate>
        <Styled.ActionLinkContainer>
          <Styled.ActionLink href={`/details/${transaction._id}`}>
            <Styled.ActionInfo />
          </Styled.ActionLink>
          <Styled.ActionLink href={`/edit/${transaction._id}`}>
            <Styled.ActionDetails />
          </Styled.ActionLink>
          <Styled.ActionButton onClick={() => setShowModal(true)}>
            <Styled.ActionDelete />
          </Styled.ActionButton>
          <Styled.TransactionAmount direction={transaction.direction}>
            {transaction.direction === "Expense" ? "- " : "+ "}
            {transaction.amount}
            {transaction.currency}
          </Styled.TransactionAmount>
        </Styled.ActionLinkContainer>
      </Styled.ContentContainer>

      <Styled.TransactionAmount direction={transaction.direction}>
        {transaction.direction === "Expense" ? "- " : "+ "}
        {transaction.amount}
        {transaction.currency}
      </Styled.TransactionAmount>
    </Styled.CardContainer>
  );
}

export default TransactionCard;
