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
    return null;
  }

  async function handleAddTransaction(newTransaction) {}

  async function handleEditTransaction(updatedTransaction, id) {}

  async function deleteTransaction(id) {}

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
