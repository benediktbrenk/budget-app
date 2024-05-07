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
  align-items: center;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const ColorField = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 8px;
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

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => {
    return props.direction === "Income" ? "green" : "red";
  }};
`;

export const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TransactionName = styled.p`
  margin: 0;
`;

export const TransactionDate = styled.p`
  margin: 0;
`;
