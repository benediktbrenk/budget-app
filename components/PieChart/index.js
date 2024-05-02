import { AgChartsReact } from "ag-charts-react";
import { useState } from "react";
import { StyledDiv } from "./PieChart.styled";

export function PieChart({ ChartData }) {
  const [chartOptions, setChartOptions] = useState({
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
}
