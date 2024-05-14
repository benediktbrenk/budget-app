import styled from "styled-components";

const doubledBorder = "10px";
const minimalDeviceWidth = "395px";

export const CategoryFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
`;

export const FilterButton = styled.button`
  // Compare to GlobalButton Settings
  border: none;
  border-radius: 4px;
  height: 60px;
  width: 70px;
  background-color: ${(props) => {
		switch (props.category) {
			case "Groceries":
				return "var(--groceries-color)";
			case "Housing":
				return "var(--housing-color)";
			case "Salary":
				return "var(--salary-color)";
			case "Insurance":
				return "var(--insurance-color)";
			case "Utilities":
				return "var(--utilities-color)";
			default:
				return "#CCCCCC";
		}
	}};
  margin-right: 10px;
`;
