import { months } from "./months";

export function findYearsInTransactions(transactions) {
  const years = transactions.map((transaction) =>
    new Date(transaction.date).getFullYear()
  );

  const yearsInTransactions = [...new Set(years)];
  yearsInTransactions.sort((a, b) => b - a);
  return yearsInTransactions;
}

export function filterTransactionsByYear(transactions, currentYear) {
  const transactionsPerYear = transactions.filter((transaction) => {
    const year = new Date(transaction.date).getFullYear();
    return year === currentYear;
  });

  return transactionsPerYear;
}

export function filterTransactionsByMonth(transactions, currentMonth) {
  const transactionsPerMonth = transactions.filter((transaction) => {
    const month = new Date(transaction.date).getMonth();
    return month === currentMonth;
  });
  return transactionsPerMonth;
}

export function sortMonths() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const reversedSortedMonths = [
    ...months.slice(currentMonth + 1),
    ...months.slice(0, currentMonth + 1),
  ].reverse();
  return reversedSortedMonths;
}
