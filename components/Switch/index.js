import * as Styled from "./Switch.styled";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

export default function DarkModeSwitch({ isDarkModeOn, toggleSwitch }) {
  console.log(isDarkModeOn);
  return (
    <Styled.Container>
      <Styled.IconContainer>
        <IoSunny size={35} />
      </Styled.IconContainer>
      <Styled.SwitchContainer onClick={toggleSwitch}>
        <Styled.SwitchButton $isDarkModeOn={isDarkModeOn} />
      </Styled.SwitchContainer>
      <Styled.IconContainer>
        <FaMoon size={30} />
      </Styled.IconContainer>
    </Styled.Container>
  );
}
