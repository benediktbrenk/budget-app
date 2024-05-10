import TransactionCard from "../TransactionCard";
import * as Styled from "./TransactionList.styled";

function TransactionList({ transactions }) {
  return (
    <Styled.TransactionList>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </Styled.TransactionList>
  );
}

export default TransactionList;
