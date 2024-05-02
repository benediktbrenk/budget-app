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

export function TabMenu({ data }) {
  const [activeTab, setActiveTab] = useState("BarChart");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <TabContainer>
        <TabButton onClick={() => openTab("BarChart")}>BarChart</TabButton>
        <TabButton onClick={() => openTab("PieChart")}>Table</TabButton>
        <TabButton onClick={() => openTab("Table")}>PieChart</TabButton>
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

export default TabMenu;
