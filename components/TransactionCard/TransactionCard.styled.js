import styled from "styled-components";
import Link from "next/link";
import { TiEdit } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

export const CardContainer = styled.li`
  border: 0.5px solid lightgrey;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.category) {
      case "Groceries":
        return "var(--groceries-color-soft)";
      case "Housing":
        return "var(--housing-color-soft)";
      case "Salary":
        return "var(--salary-color-soft)";
      case "Insurance":
        return "var(--insurance-color-soft)";
      case "Utilities":
        return "var(--utilities-color-soft)";
      default:
        return "#CCCCCC";
    }
  }};
`;

export const ColorField = styled.div`
  height: 65px;
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
  padding-left: 10px;
  gap: 0.2rem;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const TransactionName = styled.p`
  font: 700 14px/16px var(--font-family);
  margin: 0;
`;

export const TransactionDate = styled.p`
  margin: 0;
  font: 400 12px/14px var(--font-family);
`;

export const ActionLinkContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActionLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 30px;
  color: black;
`;

export const ActionButton = styled.button`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 30px;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const ActionInfo = styled(IoInformationCircleOutline)`
  height: 26px;
  width: 26px;
`;

export const ActionDetails = styled(TiEdit)`
  height: 25px;
  width: 25px;
`;

export const ActionDelete = styled(FaRegTrashCan)`
  height: 21px;
  width: 21px;
`;

export const AmountLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  color: black;
`;

export const TransactionAmount = styled.p`
  color: ${(props) => {
    return props.direction === "Income"
      ? "var(--amount-color-green)"
      : "var(--amount-color-red)";
  }};
  margin: 0;
  font: 600 16px/18px var(--font-family);
  text-align: right;
`;
