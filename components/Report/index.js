import React, { useState } from "react";
import * as Styled from "./TabMenu.styled";
import { BarChart } from "../BarChart";
import { PieChart } from "../PieChart";
import { DataTable } from "../Table";
import { LineChart } from "../LineChart";

export function Report({ filter, filteredTransactions }) {
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

  return (
    <>
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
      <Styled.TabContent active={activeTab === "BarChart"}>
        <Styled.Headline>Expense Total</Styled.Headline>
        <BarChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "Table"}>
        <Styled.Headline>Expense Total</Styled.Headline>
        <PieChart ChartData={data} />
      </Styled.TabContent>
      <Styled.TabContent active={activeTab === "PieChart"}>
        <Styled.Headline>Expense Total</Styled.Headline>
        <DataTable TableData={data} />
      </Styled.TabContent>
      <h1>line chart</h1>
      <LineChart ChartData={data} />
    </>
  );
}

export default Report;
