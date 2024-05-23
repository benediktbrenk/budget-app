import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./LineChart.styled";

export function LineChart({ chartData }) {
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
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      data: chartData,
    }));
  }, [chartData]);

  return (
    <Styled.PieContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.PieContainer>
  );
}
