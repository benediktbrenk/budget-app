import styled from "styled-components";

export const Headline = styled.h2`
  margin: 0;
`;

export const TabContent = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  width: 90%;
  height: 350px;
  font-family: Arial, sans-serif;
`;
