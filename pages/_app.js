import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "./layout";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { data, isLoading, mutate } = useSWR("/api/transactions", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
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
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <SessionProvider session={pageProps.session}>
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
