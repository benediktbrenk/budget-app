import { AgChartsReact } from "ag-charts-react";
import { useState } from "react";
import { StyledDiv } from "./PieChart.styled";
import { transactions } from "@/db/data";

const getCategoryTotalAmount = (category) => {
  return transactions
    .filter((transaction) => transaction.category === category)
    .reduce((total, transaction) => total + transaction.amount, 0);
};

const categories = ["Groceries", "Salary", "Housing", "Insurance", "Utilities"];

const ChartData = categories.map((category) => ({
  category,
  amount: getCategoryTotalAmount(category),
}));

export const PieChart = () => {
  const [chartOptions, setChartOptions] = useState({
    title: { text: "Expense Total" },
    padding: { left: 200 },
    legend: {
      position: "left",
      item: {
        label: {
          fontSize: 8,
        },
      },
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "category",
        calloutLabel: { enabled: true },
        label: {
          fontSize: 8,
        },
      },
    ],
    data: ChartData,
  });

  return (
    <StyledDiv>
      <AgChartsReact options={chartOptions} />
    </StyledDiv>
  );
};
