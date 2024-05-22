import * as Styled from "./Header.styled";
import Image from "next/image";
import LoginButton from "../LoginButton";

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer>
        <Image
          width={70}
          height={50}
          alt="app-logo"
          src="/assets/expenso-logo.png"
        />
        <Styled.Headline>expenso</Styled.Headline>
      </Styled.LogoContainer>
      <LoginButton />
    </Styled.HeaderContainer>
  );
}
