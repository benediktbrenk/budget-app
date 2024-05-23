import styled from "styled-components";

export const SignItemContainer = styled.span`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  font-size: 28px;
  align-items: center;
`;

export const SignButton = styled.button`
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  height: 48px;
  color: black;
  background-color: lightblue;
  border-radius: 12px;
`;

export const ProfileIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;
