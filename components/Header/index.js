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
      <Styled.Headline>Expenso</Styled.Headline>
      <Styled.Headline>{title}</Styled.Headline>
      <LoginButton />
    </Styled.HeaderContainer>
  );
}
