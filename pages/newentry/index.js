import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
  return (
    <>
      <Header title="New Transaction" />
      <ArrowLeft></ArrowLeft>
      <TransactionEntryForm updateTransactions={handleAddTransaction} />
    </>
  );
}

export default NewEntryPage;
