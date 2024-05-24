import * as Styled from "../Header/Header.styled";
import Image from "next/image";

function Logo() {
  return (
    <Styled.LogoContainer>
      <Image
        width={70}
        height={50}
        alt="app-logo"
        src="/assets/expenso-logo-bunte-karten.png"
      />
      <Styled.Headline>expenso</Styled.Headline>
    </Styled.LogoContainer>
  );
}

export default Logo;
