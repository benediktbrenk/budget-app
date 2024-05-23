import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "./layout";
import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { data, isLoading, mutate } = useSWR("/api/transactions", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  async function handleAddTransaction(newTransaction) {
    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    toast.success("Transaction successfully added!", {
      autoClose: 2000,
      containerId: "addToast",
    });
    router.push("/");
  }

  async function handleEditTransaction(updatedTransaction, id) {
    const response = await fetch(`/api/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTransaction),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();
    toast.success("Transaction successfully edited!", {
      autoClose: 2000,
      containerId: "editToast",
    });
  }

  async function deleteTransaction(id) {
    const response = await fetch(`/api/transactions/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();

    toast.success("Transaction successfully deleted!", {
      autoClose: 2000,
      containerId: "deleteToast",
    });
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />

      <SessionProvider session={pageProps.session}>
        <ToastContainer
          autoClose={1000}
          position="top-right"
          containerId="deleteToast"
        />
        <ToastContainer
          autoClose={1000}
          position="top-right"
          containerId="addToast"
        />
        <ToastContainer
          autoClose={1000}
          position="top-right"
          containerId="editToast"
        />
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component
              {...pageProps}
              transactions={data}
              deleteTransaction={deleteTransaction}
              handleAddTransaction={handleAddTransaction}
              handleEditTransaction={handleEditTransaction}
            />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
