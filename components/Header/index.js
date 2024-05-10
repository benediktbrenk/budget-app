import React from "react";
import * as Styled from "./Header.styled";

function Header({ title }) {
  return (
    <Styled.HeaderContainer>
      <Styled.Headline>{title}</Styled.Headline>
    </Styled.HeaderContainer>
  );
}

export default Header;
