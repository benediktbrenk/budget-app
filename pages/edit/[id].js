import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import TransactionEntryForm from "@/components/TransactionEntryForm";

export default function EditPage({ handleEditTransaction, transactions }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();

  if (!id) {
    return null;
  }
  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }

  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id,
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
    />
  );
}
