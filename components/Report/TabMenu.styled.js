import styled from "styled-components";

export const Headline = styled.h2`
  margin: 0 0 0.5rem 0;
`;

export const TabContainer = styled.div`
  overflow: hidden;
`;

export const TabButton = styled.button`
  background-color: var(--color-primary);
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 10px 20px;
  float: left;
  &:hover {
    background-color: #ddd;
  }
`;

export const TabContent = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  width: 90%;
  height: 300px;
  font-family: var(--font-family);
  margin-bottom: 80px;
`;
