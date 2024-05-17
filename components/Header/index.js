import React from "react";
import * as Styled from "./Header.styled";
import LoginButton from "../LoginButton";

function Header({ title }) {
  return (
    <Styled.HeaderContainer>
      <Styled.Headline>{title}</Styled.Headline>
      <LoginButton />
    </Styled.HeaderContainer>
  );
}

export default Header;
