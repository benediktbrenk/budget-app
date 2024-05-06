import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
  return (
    <>
      <Header title="New Transaction" />
      <ArrowLeft></ArrowLeft>
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
