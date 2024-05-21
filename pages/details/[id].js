import { useRouter } from "next/router";
import TransactionDetails from "@/components/TransactionDetails";
import TransactionEntryForm from "@/components/TransactionEntryForm";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function TransactionDetailsPage({
  transactions,
  deleteTransaction,
  handleEditTransaction,
}) {
  const [showModal, setShowModal] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }
  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }
  const currentTransaction = transactions.find(
    (transaction) => transaction._id === id
  );

  if (!currentTransaction) {
    return null;
  }

  return (
    <>
      <Modal showModal={showModal}>
        <TransactionEntryForm
          setShowModal={setShowModal}
          currentTransaction={currentTransaction}
          updateTransactions={handleEditTransaction}
          id={id}
          mode="edit"
        />
      </Modal>
      <TransactionDetails
        showModal={showModal}
        setShowModal={setShowModal}
        currentTransaction={currentTransaction}
        deleteTransaction={() => deleteTransaction(id)}
      />
      <ToastContainer autoClose={2000} />
    </>
  );
}
