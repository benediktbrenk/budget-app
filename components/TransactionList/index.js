import TransactionCard from "../TransactionCard";
import { Ul } from "./TransactionList.styled";

function TransactionList({ transactions }) {
  function filterTransactionsByMonth(transactions, currentMonth) {
    const transactionsPerMonth = transactions.filter((transaction) => {
      const month = new Date(transaction.date).getMonth();
      return month === currentMonth;
    });
    return transactionsPerMonth;
  }

  const transactionsPerMonth = filterTransactionsByMonth(transactions, 3);

  const transactionsPerMonths = [...Array(12).keys()].map((month) => {
    const transactionsPerMonth = filterTransactionsByMonth(transactions, month);
    if (transactionsPerMonth.length === 0) {
      return null;
    }
    return transactionsPerMonth;
  });

  console.log(transactionsPerMonths);

  return (
    <Ul>
      {transactionsPerMonth.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </Ul>
  );
}

export default TransactionList;
