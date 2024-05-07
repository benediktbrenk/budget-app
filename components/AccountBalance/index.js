import {
  StyledAccountBalance,
  StyledBalance,
  StyledBalanceContainer,
  StyledIncomeExpenseContainer,
  StyledP,
} from "./AccountBalance.styled";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function AccountBalance({ transactions }) {
  function getTotalExpenseAmount(transactions) {
    return transactions
      .filter((transaction) => transaction.direction === "Expense")
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  function getTotalIncomeAmount(transactions) {
    return transactions
      .filter((transaction) => transaction.direction === "Income")
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  const totalIncomeAmount = getTotalIncomeAmount(transactions);
  const totalExpenseAmount = getTotalExpenseAmount(transactions);
  const totalBalanceAmount = totalIncomeAmount - totalExpenseAmount;

  return (
    <StyledAccountBalance>
      <StyledBalanceContainer>
        <StyledP>Balance:</StyledP>
        <StyledBalance>{`${totalBalanceAmount}`} €</StyledBalance>
      </StyledBalanceContainer>
      <StyledIncomeExpenseContainer>
        <div>
          <FaAngleUp /> {`${totalIncomeAmount}`} €
        </div>
        <div>
          <FaAngleDown />
          {`${totalExpenseAmount}`} €
        </div>
      </StyledIncomeExpenseContainer>
    </StyledAccountBalance>
  );
}
