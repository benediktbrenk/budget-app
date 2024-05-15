import * as Styled from "./Header.styled";
import Image from "next/image";

function Header({ title }) {
  return (
    <Styled.HeaderContainer>
      <Image
        width={70}
        height={50}
        alt="app-logo"
        src="/assets/expenso-logo.png"
      ></Image>
      <Styled.Headline>Expenso</Styled.Headline>
    </Styled.HeaderContainer>
  );
}

export default Header;
