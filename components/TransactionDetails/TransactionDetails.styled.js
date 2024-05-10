import Link from "next/link";
const { default: styled } = require("styled-components");

export const StyledDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  background-color: white;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem lightblue;);
  position: relative;

  padding-left: 1rem;

  &:before {
    content: "";
    position: absolute;
    top: 2%;
    left: 0.3rem;
    width: 0.8rem;
    height: 96%;
    background-color: lightblue;
    border-radius: 1rem;
  }
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  padding: 0.3rem;
  gap: 1.5rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #d7d7d7;
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: lightblue;
  }
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem lightblue;
`;

export const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: white;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem red;
`;

export const StyledLabel = styled.label`
  color: gray;
  font-size: 0.9rem;
  margin-top: 0.4rem;
  border-bottom: 1px solid lightblue;
`;
