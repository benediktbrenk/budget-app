import { AgChartsReact } from "ag-charts-react";
import { useState } from "react";
import { StyledDiv } from "./BarChart.styled";

export function BarChart({ ChartData }) {
  const [chartOptions, setChartOptions] = useState({
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
}
