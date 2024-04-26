import Header from "@/components/Header";
import { transactions } from "@/db/data.js";
import { useRouter } from "next/router";

export default function TransactionDetails() {
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

  return <Header title={currentTransaction.name}></Header>;
}
