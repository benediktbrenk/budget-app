import styled from "styled-components";

export const TabContainer = styled.div`
  overflow: hidden;
`;

export const TabButton = styled.button`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 10px 20px;
  float: left;
  margin: 10px 0 20px 0;
  &:hover {
    background-color: #ddd;
  }
`;
