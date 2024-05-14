import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useSession } from "next-auth/react";

function NewEntryPage({ handleAddTransaction }) {
  const { data: session, status } = useSession();

  if (status !== "authenticated") {
    return <h2>Access denied!</h2>;
  }
  return (
    <>
      <TransactionEntryForm
        updateTransactions={handleAddTransaction}
        mode="add"
      />
    </>
  );
}

export default NewEntryPage;
