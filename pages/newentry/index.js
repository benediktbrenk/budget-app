import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ addNewTransaction }) {
  return (
    <>
      <Header title="New Transaction" />
      <ArrowLeft></ArrowLeft>
      <TransactionEntryForm onSubmit={addNewTransaction} />
    </>
  );
}

export default NewEntryPage;
