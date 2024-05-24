import * as Styled from "./Header.styled";
import LoginButton from "../LoginButton";
import Logo from "../Logo";

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoLink href="/">
        <Logo />
      </Styled.LogoLink>
      <Styled.LoginButtonAvatar>
        <LoginButton />
      </Styled.LoginButtonAvatar>
    </Styled.HeaderContainer>
  );
}
