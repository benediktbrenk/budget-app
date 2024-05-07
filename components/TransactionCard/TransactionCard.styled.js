import styled from "styled-components";
import Link from "next/link";

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CardContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const ColorField = styled.div`
  height: 2rem;
  width: 0.5rem;
  border-radius: 3px;
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
`;

export const ContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TransactionName = styled.p`
  font: 700 14px/16px var(--font-family);
  margin: 0;
`;

export const TransactionDate = styled.p`
  margin: 0;
  font: 400 14px/16px var(--font-family);
`;

export const TransactionAmount = styled.p`
  flex: 1;
  color: ${(props) => {
    return props.direction === "Income"
      ? "var(--amount-color-green)"
      : "var(--amount-color-red)";
  }};
  margin: 0;
  font: 600 14px/16px var(--font-family);
  text-align: right;
`;
