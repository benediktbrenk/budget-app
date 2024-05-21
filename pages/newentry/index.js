import ProtectPage from "@/components/ProtectPages";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewEntryPage({ handleAddTransaction }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }
  return (
    <>
      <TransactionEntryForm
        updateTransactions={handleAddTransaction}
        mode="add"
      />
      <ToastContainer />
    </>
  );
}

export default NewEntryPage;
