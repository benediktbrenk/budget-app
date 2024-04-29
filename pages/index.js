import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";
import Link from "next/link";

export default function HomePage({ data }) {
  return (
    <div>
      <Header title="Transactions" />
      <Link href="/newentry">Add New Transaction</Link>
      <TransactionList data={data} />
    </div>
  );
}
