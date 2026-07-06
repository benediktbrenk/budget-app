import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }
  return (
    <TransactionEntryForm
      updateTransactions={handleAddTransaction}
      mode="add"
    />
  );
}

export default NewEntryPage;
