import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./PieChart.styled";

export function PieChart({ chartData }) {
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
          colors: chartData.map((category) => category.color),
        },
        fills: chartData.map((category) => category.color),
      },
    ],
    data: chartData,
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: [
        {
          ...prevOptions.series[0],
          calloutLine: {
            colors: chartData.map((category) => category.color),
          },
          fills: chartData.map((category) => category.color),
        },
      ],
      data: chartData,
    }));
  }, [chartData]);

  return (
    <Styled.PieContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.PieContainer>
  );
}
