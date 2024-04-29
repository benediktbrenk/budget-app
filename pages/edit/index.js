import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
// import TransactionEntryForm from "@/components/TransactionEntryForm";

export default function EditPage() {
  /* how does the Page know which entry to edit ?
  
  const router = useRouter();

    const { id } = router.query;

  
    if (!id) {
      return null;
    }
  
    const currentTransaction = transactions.find(
      (transaction) => transaction.id == id
    );
  
    if (!currentTransaction) {
      return null;
    }
   */
  return (
    <StyledMain>
      <ArrowLeft></ArrowLeft>
      {/* where shall the back Button lead to ?! */}
      <Header title="Edit"></Header>

      {/* <TransactionEntryForm></TransactionEntryForm> */}
    </StyledMain>
  );
}
