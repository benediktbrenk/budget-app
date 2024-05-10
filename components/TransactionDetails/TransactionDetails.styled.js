import Link from "next/link";
const { default: styled } = require("styled-components");

export const DetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #d7d7d7;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditLink = styled(Link)`
  text-decoration: none;
  color: black;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  background-color: #d7d7d7;
  padding: 1rem;
  border-radius: 8px;
  background-color: lightgray;
  border: solid 1px lightgray;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Button = styled.button`
  padding: 0 1rem;
  border-radius: 8px;
  background-color: lightgray;
  border: solid 1px lightgray;
  font-size: 1rem;
`;
