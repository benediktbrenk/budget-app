import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./PieChart.styled";

export function PieChart({ ChartData }) {
  const [chartOptions, setChartOptions] = useState({
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
          colors: ChartData.map((category) => category.color),
        },
        fills: ChartData.map((category) => category.color),
      },
    ],
    data: ChartData,
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: [
        {
          ...prevOptions.series[0],
          calloutLine: {
            colors: ChartData.map((category) => category.color),
          },
          fills: ChartData.map((category) => category.color),
        },
      ],
      data: ChartData,
    }));
  }, [ChartData]);

  return (
    <Styled.PieContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.PieContainer>
  );
}
