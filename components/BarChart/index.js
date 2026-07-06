import { AgCharts } from "ag-charts-react";
import * as Styled from "./BarChart.styled";

export function BarChart({ chartData }) {
  const chartOptions = {
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
    data: chartData,
    series: [{ type: "bar", xKey: "category", yKey: "amount" }],
  };

  return (
    <Styled.ChartContainer>
      <AgCharts options={chartOptions} />
    </Styled.ChartContainer>
  );
}
