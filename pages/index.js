import Header from "@/components/Header";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import TransactionList from "@/components/TransactionList";

export default function HomePage() {
  return (
    <div>
      <Header title="Transactions" />
      <TransactionList />
      <TransactionEntryForm />
    </div>
  );
}
