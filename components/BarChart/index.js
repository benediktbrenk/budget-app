import { AgChartsReact } from "ag-charts-react";
import { useState } from "react";
import { StyledDiv } from "./BarChart.styled";
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

console.log(ChartData);
export const BarChart = () => {
  const [chartOptions, setChartOptions] = useState({
    title: { text: "Expense Total" },
    legend: {
      item: {
        label: {
          fontSize: 20,
        },
      },
    },
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          fontSize: 16,
        },
      },
      {
        type: "category",
        position: "bottom",
        label: {
          fontSize: 16,
        },
      },
    ],
    data: ChartData,
    series: [{ type: "bar", xKey: "category", yKey: "amount" }],
  });

  return (
    <StyledDiv>
      <AgChartsReact options={chartOptions} />
    </StyledDiv>
  );
};
