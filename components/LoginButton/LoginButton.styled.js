import Link from "next/link";
import styled from "styled-components";

export const SignItemContainer = styled.span`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  padding: 20px;
  gap: 5px;
`;

export const SignLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  height: 48px;
  align-self: center;

  color: black;
  background-color: lightgray;
  border-radius: 6px;
`;

export const SignButton = styled.button`
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  height: 48px;
  align-self: center;

  color: black;
  background-color: lightblue;
  border-radius: 12px;
`;
