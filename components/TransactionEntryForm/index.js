import { Button } from "../Button/Button.styled";
import * as Styled from "./TransactionEntryForm.styled";
import { useRouter } from "next/router";
import React from "react";

function TransactionEntryForm({
  updateTransactions,
  id,
  currentTransaction,
  mode,
}) {

  
  const router = useRouter();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedTransaction = {
      direction: formData.get("direction"),
      name: formData.get("name"),
      amount: parseFloat(formData.get("amount")),
      currency: formData.get("currency"),
      date: formData.get("date"),
      paymentMethod: formData.get("paymentMethod"),
      category: formData.get("category"),
      description: formData.get("description"),
    };
    updateTransactions(updatedTransaction, id);
    event.target.reset();
    router.push("/");
  };

  const handleBack = () => {
    router.back(); 
  };

  return (
    <>
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <Styled.FormContainer>
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
          <select type="text" name="category" required defaultValue="Groceries">
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
        <Styled.FormButton>
          <Button $type="submit">Submit</Button>
        </Styled.FormButton>
      </Styled.FormContainer>
    </form>
    </div>
    </>
  );
}

export default TransactionEntryForm;