import Link from "next/link";
const { default: styled } = require("styled-components");

export const StyledDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  
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
    left: 0rem;
    width: 0.8rem;
    height: 96%;
    background-color: lightblue;
    border-radius: 0 1rem 0 1rem;
  }
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  padding: 0.2rem;
  gap: 0.2rem;
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
  border-radius: 50px;
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
  border-radius: 50px;
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
  color: darkgrey;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.4rem;
  margin-left: 0.1rem;
  border-bottom: 0.2rem solid lightblue;
  border-radius: 0.9rem 0.9rem 0.9rem 0;
`;
