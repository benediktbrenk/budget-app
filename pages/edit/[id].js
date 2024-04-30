import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useRouter } from "next/router";

export default function EditPage({ handleEditTransaction, transactions }) {
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
      <Header title="Edit"></Header>

      <TransactionEntryForm
        updateTransactions={handleEditTransaction}
        currentTransaction={currentTransaction}
        id={id}
        mode="edit"
      ></TransactionEntryForm>
    </StyledMain>
  );
}
