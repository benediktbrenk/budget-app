import Link from "next/link";
const { default: styled } = require("styled-components");

export const StyledDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #d7d7d7;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: lightgray;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightblue;
  }
`;

export const StyledDiv = styled.div`
  background-color: #d7d7d7;
  padding: 1rem;
  border-radius: 8px;
  background-color: lightgray;
  border: solid 1px lightgray;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: lightgray;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;
