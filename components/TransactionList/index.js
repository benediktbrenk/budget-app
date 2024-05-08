import TransactionCard from "../TransactionCard";
import { Ul } from "./TransactionList.styled";

function TransactionList({ transactions }) {
  function filterTransactionsByMonth(transactions, currentMonth) {
    const transactionsInMarch = transactions.filter((transaction) => {
      const month = new Date(transaction.date).getMonth();
      return month === currentMonth;
    });
    return transactionsInMarch;
  }

  const transactionsInMarch = filterTransactionsByMonth(transactions, 4);

  return (
    <Ul>
      {transactionsInMarch.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </Ul>
  );
}

export default TransactionList;
