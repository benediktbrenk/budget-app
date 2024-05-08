import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
  return (
    <>
      <Header title="New Transaction" />
      <StyledMain>
        <TransactionEntryForm
          updateTransactions={handleAddTransaction}
          mode="add"
        />
      </StyledMain>
    </>
  );
}

export default NewEntryPage;
