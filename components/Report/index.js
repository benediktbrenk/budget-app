import React, { useState } from "react";
import * as Styled from "./Report.styled";
import { BarChart } from "../BarChart";
import { PieChart } from "../PieChart";
import { DataTable } from "../Table";
import { LineChart } from "../LineChart";
import { months } from "@/utils/months";
import TabMenu from "../TabMenu";

export function Report({ filter, filteredTransactions, transactions }) {
  const [activeTab, setActiveTab] = useState("BarChart");

  function handleActiveTab(Tab) {
    setActiveTab(Tab);
  }

  function getCategoryTotalAmount(category) {
    return filteredTransactions
      .filter(
        (filteredTransaction) => filteredTransaction.category === category,
      )
      .reduce(
        (total, filteredTransaction) => total + filteredTransaction.amount,
        0,
      );
  }

  const data = filter.categories.map((category) => ({
    category,
    amount: getCategoryTotalAmount(category),
  }));

  const transactionsIn2024 = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate.getFullYear() === 2024;
  });

  function getTotalPerMonth(direction, month) {
    return transactionsIn2024
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transaction.direction === direction &&
          transactionDate.getMonth() === months.indexOf(month)
        );
      })
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  const lineData = months.map((month) => ({
    month,
    income: getTotalPerMonth("Income", month),
    expense: getTotalPerMonth("Expense", month),
  }));

  return (
    <>
      <Styled.Headline>Expense Total</Styled.Headline>
      <Styled.TabContent active={activeTab === "BarChart"}>
        <TabMenu handleActiveTab={handleActiveTab} />
        <BarChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "Table"}>
        <TabMenu handleActiveTab={handleActiveTab} />
        <PieChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "PieChart"}>
        <TabMenu handleActiveTab={handleActiveTab} />
        <DataTable TableData={data} />
      </Styled.TabContent>
      <Styled.Headline>Annual Balance Sheet</Styled.Headline>
      <Styled.TabContent active={true}>
        <LineChart ChartData={lineData} />
      </Styled.TabContent>
    </>
  );
}

export default Report;
