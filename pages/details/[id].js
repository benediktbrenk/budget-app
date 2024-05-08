import Header from "@/components/Header";
import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import { StyledMain } from "@/components/Main/Main.styled";

export default function TransactionDetailsPage({
  transactions,
  deleteTransaction,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id
  );

  if (!currentTransaction) {
    return null;
  }

  return (
    <>
      <Header title="Details"></Header>
      <StyledMain>
        <TransactionDetails
          currentTransaction={currentTransaction}
          deleteTransaction={() => deleteTransaction(id)}
        ></TransactionDetails>
      </StyledMain>
    </>
  );
}
