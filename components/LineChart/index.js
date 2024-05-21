import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./LineChart.styled";

export function LineChart({ ChartData }) {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: "Annual Balance Sheet",
    },
    data: ChartData,
    series: [
      {
        type: "line",
        xKey: "category",
        yKey: "amount",
        yName: "Income",
      },
      {
        type: "line",
        xKey: "category",
        yKey: "amount",
        yName: "Expense",
      },
    ],
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      data: ChartData,
    }));
  }, [ChartData]);

  return (
    <Styled.PieContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.PieContainer>
  );
}
