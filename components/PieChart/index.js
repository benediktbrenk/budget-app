import { AgChartsReact } from "ag-charts-react";
import * as Styled from "./PieChart.styled";

export function PieChart({ chartData }) {
  const options = {
    legend: { enabled: false },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "category",
        calloutLabel: { enabled: true },
        label: {
          fontSize: 8,
        },
        calloutLine: {
          colors: chartData.map((category) => category.color),
        },
        fills: chartData.map((category) => category.color),
      },
    ],
    data: chartData,
  };

  return (
    <Styled.PieContainer>
      <AgChartsReact options={options} />
    </Styled.PieContainer>
  );
}
