import TransactionCard from "../TransactionCard";
import * as Styled from "./TransactionList.styled";

function TransactionList({ transactions }) {
  function filterTransactionsByMonth(transactions, currentMonth) {
    const transactionsPerMonth = transactions.filter((transaction) => {
      const month = new Date(transaction.date).getMonth();
      return month === currentMonth;
    });
    return transactionsPerMonth;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function SortMonths() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const reversedSortedMonths = [
      ...months.slice(currentMonth + 1),
      ...months.slice(0, currentMonth + 1),
    ].reverse();
    return reversedSortedMonths;
  }
  const sortedMonths = SortMonths();

  const transactionsPerMonths = sortedMonths.map((month) => {
    const index = months.indexOf(month);
    const transactionsPerMonth = filterTransactionsByMonth(transactions, index);
    if (transactionsPerMonth.length === 0) {
      return null;
    }
    transactionsPerMonth.sort((a, b) => new Date(b.date) - new Date(a.date));
    return { month, transactions: transactionsPerMonth };
  });

  return (
    <>
      {transactionsPerMonths.map(
        (transactionsPerMonth, index) =>
          transactionsPerMonth && (
            <Styled.MonthContainer key={index}>
              <Styled.Headline>{transactionsPerMonth.month}</Styled.Headline>
              <Styled.Ul>
                {transactionsPerMonth.transactions.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </Styled.Ul>
            </Styled.MonthContainer>
          )
      )}
    </>
  );
}

export default TransactionList;
