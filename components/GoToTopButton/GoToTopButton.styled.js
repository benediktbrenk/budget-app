import styled from "styled-components";

export const IconButton = styled.button`
  position: fixed;
  font-size: 30px;
  bottom: 70px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  color: black;
  display: ${(props) => !props.$showButton && "none"};
`;
