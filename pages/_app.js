import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "./layout";
import { SessionProvider } from "next-auth/react";
import ProfileManager from "@/components/ProfileManager"; // Assuming this is the location of your ProfileManager component

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { data, isLoading, mutate } = useSWR("/api/transactions", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null; // or any other fallback if needed
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
            <ProfileManager />
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
