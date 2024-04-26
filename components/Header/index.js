import React from "react";
import { StyledHeader } from "./Header.styled";

function Header({ title }) {
  return <StyledHeader> {title}</StyledHeader>;
}

export default Header;
