import * as Styled from "./AccountBalance.styled";
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

  const totalIncomeAmount = getTotalIncomeAmount(transactions).toFixed(2);
  const totalExpenseAmount = getTotalExpenseAmount(transactions).toFixed(2);
  const totalBalanceAmount = totalIncomeAmount - totalExpenseAmount;

  return (
    <Styled.AccountBalanceCard>
      <Styled.BalanceContainer>
        <Styled.BalanceSum>{totalBalanceAmount.toFixed(2)} €</Styled.BalanceSum>
      </Styled.BalanceContainer>
      <Styled.IncomeExpenseContainer>
        <Styled.TotalIncome>
          <FaAngleUp />
          {totalIncomeAmount} €
        </Styled.TotalIncome>
        <Styled.TotalExpense>
          <FaAngleDown />
          {totalExpenseAmount} €
        </Styled.TotalExpense>
      </Styled.IncomeExpenseContainer>
    </Styled.AccountBalanceCard>
  );
}
