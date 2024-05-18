import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ReactCardFlip from "react-card-flip";

export default function TransactionDetailsPage({
  transactions,
  deleteTransaction,
  handleEditTransaction,
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [flip, setFlip] = useState(false);

  if (!id) {
    return null;
  }
  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }
  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id
  );

  if (!currentTransaction) {
    return null;
  }

  return (
    <>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <TransactionDetails
          currentTransaction={currentTransaction}
          deleteTransaction={() => deleteTransaction(id)}
          flip={flip}
          setFlip={setFlip}
        />
        <TransactionEntryForm
          currentTransaction={currentTransaction}
          updateTransactions={handleEditTransaction}
          id={id}
          mode="edit"
          flip={flip}
          setFlip={setFlip}
        />
      </ReactCardFlip>
    </>
  );
}
