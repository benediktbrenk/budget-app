import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./LineChart.styled";

export function LineChart({ ChartData }) {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: "2024",
    },
    data: ChartData,
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
      data: ChartData,
    }));
    console.log(ChartData);
  }, [ChartData]);

  return (
    <Styled.PieContainer>
      <AgChartsReact options={chartOptions} />
    </Styled.PieContainer>
  );
}