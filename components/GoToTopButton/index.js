import React, { useState, useEffect } from "react";
import * as Styled from "./GoToTopButton.styled";
import { FaAnglesUp } from "react-icons/fa6";

export default function GoToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const scrollPercentage = (scrolled / (fullHeight - windowHeight)) * 100;

      setShowButton(scrollPercentage >= 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButton]);

  return (
    <Styled.IconButton showButton={showButton}>
      <FaAnglesUp />
    </Styled.IconButton>
  );
}

// style={{ display: showButton ? "" : "none" }}
