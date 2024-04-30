import { useState } from "react";
import GlobalStyle from "../styles";
import { transactions } from "@/db/data.js";
import { uid } from "uid";

const initialTransactions = transactions;

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function handleAddTransaction(newTransaction) {
    setTransactions([{ id: uid(), ...newTransaction }, ...transactions]);
  }

  function handleEditTransaction(updatedTransaction, id) {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id == id
        ? {
            ...transaction,
            name: updatedTransaction.name,
            amount: updatedTransaction.amount,
            currency: updatedTransaction.currency,
            date: updatedTransaction.date,
            description: updatedTransaction.description,
            category: updatedTransaction.category,
            paymentMethod: updatedTransaction.paymentMethod,
            direction: updatedTransaction.direction,
          }
        : transaction
    );
    setTransactions(updatedTransactions);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        handleAddTransaction={handleAddTransaction}
        handleEditTransaction={handleEditTransaction}
      />
    </>
  );
}
