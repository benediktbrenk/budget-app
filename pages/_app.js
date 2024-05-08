import { useState } from "react";
import GlobalStyle from "../styles";
import { transactions } from "@/db/data.js";
import { uid } from "uid";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "./layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  // This is only meant as a temporary solution to keep the App working as long as backend create, update and delete are not implemented (next US)
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

  const { data: initialTransactions, isLoading } = useSWR(
    `/api/transactions`,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!initialTransactions) {
    return;
  }

  if (initialTransactions && !transactions.length) {
    setTransactions(initialTransactions);
  }
  // Until here

  function handleAddTransaction(newTransaction) {
    setTransactions([{ _id: uid(), ...newTransaction }, ...transactions]);
  }
  function handleEditTransaction(updatedTransaction, id) {
    const updatedTransactions = transactions.map((transaction) =>
      transaction._id == id
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
  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((transaction) => transaction._id !== id)
    );
    router.push("/");
  }
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            handleAddTransaction={handleAddTransaction}
            handleEditTransaction={handleEditTransaction}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
