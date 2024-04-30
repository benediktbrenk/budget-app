import { useState } from "react";
import GlobalStyle from "../styles";
import { transactions } from "@/db/data.js";
import { uid } from "uid";
import { useRouter } from "next/router";

const initialTransactions = transactions;

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);
  const router = useRouter();

  function handleAddTransaction(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTransaction = Object.fromEntries(formData);
    setTransactions([{ id: uid(), ...newTransaction }, ...transactions]);
    event.target.reset();
    router.push("/");
  }

  function handleDeleteTransaction(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        addNewTransaction={handleAddTransaction}
        deleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
