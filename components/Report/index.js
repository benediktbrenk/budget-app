import React, { useState } from "react";
import {
  StyledHeadline,
  TabButton,
  TabContainer,
  TabContent,
} from "./TabMenu.styled";
import { BarChart } from "../BarChart";
import { PieChart } from "../PieChart";
import { DataTable } from "../Table";

export function Report({ filter, filteredTransactions }) {
  const [activeTab, setActiveTab] = useState("BarChart");

  function getCategoryTotalAmount(category) {
    return filteredTransactions
      .filter(
        (filteredTransaction) => filteredTransaction.category === category
      )
      .reduce(
        (total, filteredTransaction) => total + filteredTransaction.amount,
        0
      );
  }

  const data = filter.categories.map((category) => ({
    category,
    amount: getCategoryTotalAmount(category),
  }));

  return (
    <>
      <TabContainer>
        <TabButton onClick={() => setActiveTab("BarChart")}>BarChart</TabButton>
        <TabButton onClick={() => setActiveTab("PieChart")}>Table</TabButton>
        <TabButton onClick={() => setActiveTab("Table")}>PieChart</TabButton>
      </TabContainer>
      <TabContent active={activeTab === "BarChart"}>
        <StyledHeadline>Expense Total</StyledHeadline>
        <BarChart ChartData={data}></BarChart>
      </TabContent>
      <TabContent active={activeTab === "Table"}>
        <StyledHeadline>Expense Total</StyledHeadline>
        <PieChart ChartData={data}></PieChart>
      </TabContent>
      <TabContent active={activeTab === "PieChart"}>
        <StyledHeadline>Expense Total</StyledHeadline>
        <DataTable TableData={data}></DataTable>
      </TabContent>
    </>
  );
}

export default Report;
