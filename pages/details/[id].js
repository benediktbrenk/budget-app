import Header from "@/components/Header";
import { transactions } from "@/db/data.js";
import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import { StyledMain } from "@/components/Main/Main.styled";
import ArrowLeft from "@/components/ArrowLeft";

export default function TransactionDetailsPage() {
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
    <StyledMain>
      <ArrowLeft></ArrowLeft>
      <Header title="Details"></Header>
      <TransactionDetails
        currentTransaction={currentTransaction}
      ></TransactionDetails>
    </StyledMain>
  );
}
