import Header from "@/components/Header";
import TransactionList from "@/components/TransactionList";

export default function HomePage() {
  return (
    <div>
      <Header title="Transactions" />
      <TransactionList />
    </div>
  );
}
