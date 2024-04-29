import { useState } from "react";
import GlobalStyle from "../styles";
import { transactions } from "@/db/data.js";
import { uid } from "uid";
import { useRouter } from "next/router";

const initialTransactions = transactions;

export default function App({ Component, pageProps }) {
  const [entries, setEntries] = useState(initialTransactions);
  const router = useRouter();

  function handleAddTransaction(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
    console.log(entries);
    event.target.reset();
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={entries}
        addNewTransaction={handleAddTransaction}
      />
    </>
  );
}
