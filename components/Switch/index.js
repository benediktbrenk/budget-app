import * as Styled from "./Switch.styled";
import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

export default function DarkModeSwitch() {
  const [isDarkModeON, setISDarkModeOn] = useState(false);

  const toggleSwitch = () => {
    setISDarkModeOn(!isDarkModeON);
  };

  console.log(isDarkModeON);
  return (
    <Styled.Container>
      <IoSunny size={35} />
      <Styled.SwitchContainer onClick={toggleSwitch}>
        <Styled.SwitchButton isDarkModeON={isDarkModeON} />
      </Styled.SwitchContainer>
      <FaMoon size={30} />
    </Styled.Container>
  );
}
