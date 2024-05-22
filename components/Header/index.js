import * as Styled from "./Header.styled";
import Image from "next/image";
import LoginButton from "../LoginButton";
import Logo from "../Logo";

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Logo />

      <Styled.LoginButtonAvatar>
        <LoginButton />
      </Styled.LoginButtonAvatar>
    </Styled.HeaderContainer>
  );
}
