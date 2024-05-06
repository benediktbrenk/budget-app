import Header from "@/components/Header";
import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import { StyledMain } from "@/components/Main/Main.styled";
import ArrowLeft from "@/components/ArrowLeft";

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
    (transaction) => transaction.id == id
  );

  if (!currentTransaction) {
    return null;
  }

  return (
    <>
      <Header title="Details"></Header>
      <ArrowLeft></ArrowLeft>
      <StyledMain>
        <TransactionDetails
          currentTransaction={currentTransaction}
          deleteTransaction={deleteTransaction}
        ></TransactionDetails>
      </StyledMain>
    </>
  );
}
