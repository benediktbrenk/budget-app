import TransactionCard from "../TransactionCard";
import { Ul } from "./TransactionList.styled";

function TransactionList({ transactions }) {
  return (
    <Ul>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </Ul>
  );
}

export default TransactionList;
