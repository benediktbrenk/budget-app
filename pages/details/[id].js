import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import * as Styled from "@/components/Main/Main.styled";
import { useSession } from "next-auth/react";

export default function TransactionDetailsPage({
  transactions,
  deleteTransaction,
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }
  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }
  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id
  );

  if (!currentTransaction) {
    return null;
  }

  return (
    <>
      <Styled.Main>
        <TransactionDetails
          currentTransaction={currentTransaction}
          deleteTransaction={() => deleteTransaction(id)}
        />
      </Styled.Main>
    </>
  );
}
