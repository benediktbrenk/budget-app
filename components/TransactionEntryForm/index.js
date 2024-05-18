import * as Styled from "./TransactionEntryForm.styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../Button/Button.styled";
import { categories } from "@/utils/categories";

function TransactionEntryForm({
  updateTransactions,
  id,
  currentTransaction,
  mode,
  setShowModal,
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    mode === "add" ? "Groceries" : currentTransaction.category
  );
  const currentCategory = categories.find(
    (category) => category.name === selectedCategory
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const updatedTransaction = { ...data, amount: parseFloat(data.amount) };
    updateTransactions(updatedTransaction, id);
    event.target.reset();
    setShowModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Styled.FormContainer
        $color={currentCategory.color}
        $softColor={currentCategory.softColor}
      >
        <Styled.FormField>
          <label htmlFor="direction">Direction</label>
          <select
            type="text"
            name="direction"
            required
            defaultValue={
              mode === "add" ? "Default" : currentTransaction.direction
            }
          >
            <option value="Default">--Select Option--</option>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="name"
            maxLength={30}
            required
            defaultValue={mode === "add" ? "" : currentTransaction.name}
          />
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            max="999999.99"
            min="0.00"
            step="0.01"
            required
            defaultValue={mode === "add" ? "" : currentTransaction.amount}
          />
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="currency">Currency</label>
          <select
            type="text"
            name="currency"
            required
            defaultValue={
              mode === "add" ? "Default" : currentTransaction.currency
            }
          >
            <option value="Default">--Select Option--</option>
            <option value="€">€</option>
          </select>
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            required
            defaultValue={mode === "add" ? "" : currentTransaction.date}
          />
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            type="text"
            name="paymentMethod"
            required
            defaultValue={
              mode === "add" ? "" : currentTransaction.paymentMethod
            }
          >
            <option value="Default">--Select Option--</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="category">Category</label>
          <select
            type="text"
            name="category"
            required
            defaultValue={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="Groceries">Groceries</option>
            <option value="Salary">Salary</option>
            <option value="Housing">Housing</option>
            <option value="Insurance">Insurance</option>
            <option value="Utilities">Utilities</option>
          </select>
        </Styled.FormField>
        <Styled.FormField>
          <label htmlFor="description">Description</label>
          <textarea
            rows="7"
            maxLength={140}
            type="text"
            name="description"
            defaultValue={mode === "add" ? "" : currentTransaction.description}
          />
        </Styled.FormField>
      </Styled.FormContainer>
      <Styled.FormButton>
        <Button $type="submit" onClick={router.push("/")}>
          {mode === "add" ? "Add" : "Save"}
        </Button>
        {mode === "edit" && (
          <Button
            $type="danger"
            $textColor="white"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        )}
      </Styled.FormButton>
    </form>
  );
}

export default TransactionEntryForm;
