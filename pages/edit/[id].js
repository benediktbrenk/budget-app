import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useRouter } from "next/router";

export default function EditPage({ handleEditTransaction, transactions }) {
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
    <TransactionEntryForm
      updateTransactions={handleEditTransaction}
      currentTransaction={currentTransaction}
      id={id}
      mode="edit"
    ></TransactionEntryForm>
  );
}
