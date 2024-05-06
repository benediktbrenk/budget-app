import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      data: ChartData,
    }));
  }, [ChartData]);

  return (
    <StyledDiv>
      <AgChartsReact options={chartOptions} />
    </StyledDiv>
  );
}
