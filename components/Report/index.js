import React, { useState } from "react";
import * as Styled from "./Report.styled";
import { BarChart } from "../BarChart";
import { PieChart } from "../PieChart";
import { DataTable } from "../Table";
import { LineChart } from "../LineChart";
import { months } from "@/utils/months";

export function Report({ filter, filteredTransactions, transactions }) {
  const [activeTab, setActiveTab] = useState("BarChart");

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

  function getTotalPerMonth(direction, month) {
    return transactions
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

  console.log(lineData);

  return (
    <>
      <Styled.Headline>Expense Total</Styled.Headline>
      <Styled.TabContent active={activeTab === "BarChart"}>
        <Styled.TabContainer>
          <Styled.TabButton onClick={() => setActiveTab("BarChart")}>
            BarChart
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("PieChart")}>
            Table
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("Table")}>
            PieChart
          </Styled.TabButton>
        </Styled.TabContainer>
        <BarChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "Table"}>
        <Styled.TabContainer>
          <Styled.TabButton onClick={() => setActiveTab("BarChart")}>
            BarChart
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("PieChart")}>
            Table
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("Table")}>
            PieChart
          </Styled.TabButton>
        </Styled.TabContainer>
        <PieChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "PieChart"}>
        <Styled.TabContainer>
          <Styled.TabButton onClick={() => setActiveTab("BarChart")}>
            BarChart
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("PieChart")}>
            Table
          </Styled.TabButton>
          <Styled.TabButton onClick={() => setActiveTab("Table")}>
            PieChart
          </Styled.TabButton>
        </Styled.TabContainer>
        <DataTable TableData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={true}>
        <Styled.Headline>Annual Balance Sheet</Styled.Headline>
        <LineChart ChartData={lineData} />
      </Styled.TabContent>
    </>
  );
}

export default Report;
