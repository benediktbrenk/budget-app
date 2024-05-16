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
  if (status !== "authenticated") {
    return <h2>Access denied!</h2>;
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
        ></TransactionDetails>
      </Styled.Main>
    </>
  );
}
