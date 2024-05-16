import React, { useState } from "react";
import * as Styled from "./TransactionCard.styled";
import ModalDelete from "../ModalDelete";
import { categories } from "@/utils/categories";

function TransactionCard({ transaction, deleteTransaction }) {
  const [showModal, setShowModal] = useState(false);
  const currentCategory = categories.find(
    (category) => category.name === transaction.category,
  );

  return (
    <Styled.CardContainer
      key={transaction._id}
      category={transaction.category}
      $color={currentCategory.softColor}
    >
      <ModalDelete
        showModal={showModal}
        setShowModal={setShowModal}
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
            <Styled.ActionLink href={`/edit/${transaction._id}`}>
              <Styled.ActionDetails />
            </Styled.ActionLink>
            <Styled.ActionButton onClick={() => setShowModal(true)}>
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
  );
}

export default TransactionCard;
