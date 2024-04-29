import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ addNewTransaction }) {
  return (
    <>
      <TransactionEntryForm onSubmit={addNewTransaction} />
    </>
  );
}

export default NewEntryPage;
