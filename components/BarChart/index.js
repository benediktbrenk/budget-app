import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./BarChart.styled";

export function BarChart({ chartData }) {
  const [chartOptions, setChartOptions] = useState({
    legend: {
      item: {
        label: {
          fontSize: 14,
        },
      },
    },
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          fontSize: 12,
        },
      },
      {
        type: "category",
        position: "bottom",
        label: {
          fontSize: 12,
        },
      },
    ],
    data: chartData,
    series: [{ type: "bar", xKey: "category", yKey: "amount" }],
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      data: chartData,
    }));
  }, [chartData]);

  return (
    <Styled.ChartContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.ChartContainer>
  );
}
