import Header from "@/components/Header";
import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";

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
      <TransactionDetails
        currentTransaction={currentTransaction}
        deleteTransaction={deleteTransaction}
      ></TransactionDetails>
    </>
  );
}
