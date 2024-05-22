import * as Styled from "./Header.styled";
import Image from "next/image";
import LoginButton from "../LoginButton";

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Image
        width={70}
        height={50}
        alt="app-logo"
        src="/assets/expenso-logo.png"
      ></Image>
      <Styled.Headline>expenso</Styled.Headline>
      <Styled.LoginButtonAvatar>
        <LoginButton />
      </Styled.LoginButtonAvatar>
    </Styled.HeaderContainer>
  );
}
