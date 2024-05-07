import React from "react";
import * as Styled from "./Header.styled";

function Header({ title }) {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderH1>{title}</Styled.HeaderH1>
    </Styled.HeaderContainer>
  );
}

export default Header;
