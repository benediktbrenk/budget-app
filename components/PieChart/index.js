import { AgChartsReact } from "ag-charts-react";
import { useEffect, useState } from "react";
import * as Styled from "./PieChart.styled";

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
		<Styled.PieContainer>
			<AgChartsReact options={chartOptions} />
		</Styled.PieContainer>
	);
}
