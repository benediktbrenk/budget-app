import TransactionEntryForm from "@/components/TransactionEntryForm";

function NewEntryPage({ handleAddTransaction }) {
	return (
		<>
			<TransactionEntryForm
				updateTransactions={handleAddTransaction}
				mode="add"
			/>
		</>
	);
}

export default NewEntryPage;
