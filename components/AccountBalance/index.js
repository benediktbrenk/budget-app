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
    <div>
      <div>Balance{`${totalBalanceAmount}`}</div>
      <div>Income{`${totalIncomeAmount}`}</div>
      <div>Expense {`${totalExpenseAmount}`}</div>
    </div>
  );
}
