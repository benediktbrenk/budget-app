import styled from "styled-components";

export const SignItemContainer = styled.span`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  font-size: 28px;
  align-items: center;
  cursor: pointer;
`;

export const AvatarContainer = styled.span`
  font-size: 36px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #4893e9;
  }
`;

export const SignButton = styled.button`
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  height: 48px;
  color: black;
  background-color: #4893e9;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
