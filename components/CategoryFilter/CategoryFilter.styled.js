import styled from "styled-components";
import css from "styled-jsx/css";

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

  border: 2px solid;
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
  
  ${(props) =>
		props.active &&
		css`
      outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(1px);
  }
`;
