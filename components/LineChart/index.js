import { AgCharts } from "ag-charts-react";
import * as Styled from "./LineChart.styled";

export function LineChart({ chartData }) {
  const options = {
    legend: {
      item: {
        label: {
          fontSize: 14,
        },
      },
    },
    axes: {
      y: {
        type: "number",
        position: "left",
        label: {
          fontSize: 12,
        },
      },
      x: {
        type: "category",
        position: "bottom",
        label: {
          fontSize: 12,
        },
      },
    },
    title: {
      text: "2024",
    },
    data: chartData,
    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "income",
        yName: "Income",
      },
      {
        type: "line",
        xKey: "month",
        yKey: "expense",
        yName: "Expense",
      },
    ],
  };

  return (
    <Styled.PieContainer>
      <AgCharts options={options} />
    </Styled.PieContainer>
  );
}
