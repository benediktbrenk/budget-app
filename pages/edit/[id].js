import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function EditPage({ handleEditTransaction, transactions }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();

  if (!id) {
    return null;
  }

  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id
  );

  if (!currentTransaction) {
    return null;
  }

  if (status !== "authenticated") {
    return <h2>Access denied!</h2>;
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
