import styled from "styled-components";
import Link from "next/link";
import { TiEdit } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: row;
  border: 0.5px solid lightgrey;
  padding: 10px;
  margin: 10px 0px;
  list-style: none;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.$color || "#CCCCCC"};

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--box-shadow);
    transition: transform 0.2s ease-out;
    opacity: 1.3;
  }
`;

export const ColorField = styled.div`
  height: 65px;
  width: 0.5rem;
  border-radius: 3px;
  background-color: ${(props) => props.$color || "#CCCCCC"};
  &:hover {
    opacity: 1.3;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  gap: 0.2rem;
`;

export const TransactionName = styled(Link)`
  text-decoration: none;
  color: var(--color-text-black);
  font: 700 14px/16px var(--font-family);
  margin: 0;
`;

export const TransactionDate = styled.p`
  margin: 0;
  font: 400 12px/14px var(--font-family);
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionLinkContainer = styled.div`
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
  color: var(--color-text-black);
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
  color: black;
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

export const Amount = styled(Link)`
  text-decoration: none;
  color: ${(props) => {
    return props.$direction === "Income"
      ? "var(--color-green)"
      : "var(--color-red)";
  }};
  margin: 0;
  font: 600 16px/18px var(--font-family);
  text-align: right;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
