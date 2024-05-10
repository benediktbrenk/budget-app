import { Fragment } from "react";
import TransactionCard from "../TransactionCard";
import * as Styled from "./TransactionList.styled";
import {
  findYearsInTransactions,
  filterTransactionsByYear,
  filterTransactionsByMonth,
  sortMonths,
} from "../../utils/transaction";
import { months } from "@/utils/months";

function TransactionList({ transactions }) {
  const yearsInTransactions = findYearsInTransactions(transactions);

  const transactionsPerYearsAndMonths = yearsInTransactions.map(
    (year, index) => {
      const transactionsPerYear = filterTransactionsByYear(transactions, year);

      const monthsToMap =
        index === 0 ? sortMonths(new Date().getMonth()) : months.toReversed();

      const transactionsPerMonths = monthsToMap.map((month) => {
        const monthIndex = months.indexOf(month);
        const transactionsPerMonth = filterTransactionsByMonth(
          transactionsPerYear,
          monthIndex
        );
        if (transactionsPerMonth.length === 0) {
          return { month, transactions: [] };
        }
        transactionsPerMonth.toSorted(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        return { month, transactions: transactionsPerMonth };
      });

      return { year, transactionsPerMonths };
    }
  );

  return (
    <>
      {transactionsPerYearsAndMonths.map((year) => (
        <Fragment key={year}>
          {year.transactionsPerMonths.map(
            (transactionsPerMonth) =>
              transactionsPerMonth.transactions.length > 0 && (
                <Styled.MonthContainer
                  key={`${year}-${transactionsPerMonth.month}`}
                >
                  <Styled.Headline>
                    {transactionsPerMonth.month} {year.year}
                  </Styled.Headline>
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
        </Fragment>
      ))}
    </>
  );
}

export default TransactionList;
