import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useRouter } from "next/router";

export default function EditPage({ handleEditTransaction }) {
  const router = useRouter();

  const { id } = router.query;

  if (!id) {
    return null;
  }

  return (
    <StyledMain>
      <ArrowLeft></ArrowLeft>
      {/* where shall the back Button lead to ?! */}
      <Header title="Edit"></Header>

      <TransactionEntryForm
        updateTransactions={handleEditTransaction}
        id={id}
      ></TransactionEntryForm>
    </StyledMain>
  );
}
