import ProtectPage from "@/components/ProtectPages";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
  return (
    <>
      <ProtectPage>
        <TransactionEntryForm
          updateTransactions={handleAddTransaction}
          mode="add"
        />
      </ProtectPage>
    </>
  );
}

export default NewEntryPage;
