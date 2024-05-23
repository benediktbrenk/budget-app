import styled from "styled-components";

export const SwitchContainer = styled.div`
  width: 60px;
  height: 30px;
  background-color: #ccc;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  margin: 0 10px;
`;

export const SwitchButton = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${(props) => (props.isDarkModeON ? "32.5px" : "2.5px")};
  transition: left 0.2s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;