import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
}

  :root {
--color-text:${(props) => (props.$isDarkModeOn ? "white" : "black")};
--color-text-active:${(props) => (props.$isDarkModeOn ? "white" : "black")};
--color-text-black:black;
--color-text-white:white;
--color-text-reverse:${(props) => (props.$isDarkModeOn ? "black" : "white")};
--color-input:${(props) => (props.$isDarkModeOn ? "#5B5959" : "white")};

--color-primary:#4893E9;

--color-secondary: ${(props) => (props.$isDarkModeOn ? "#454444" : "#E9EFF2")};
--color-secondary-light:#E9EFF2;
--color-secondary-dark:#454444;
--color-background-light:white;
--color-background-dark:#282828;
--color-green:#07B789;
--color-red:#E93963;
--color-nav-hover:#A1C5EF;
--color-sun:${(props) => (props.$isDarkModeOn ? "#282828" : "#F7B801")};
--color-moon:${(props) => (props.$isDarkModeOn ? "white" : "#282828")};
--border-radius:8px;
--box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
--box-shadow-nav: 0 -2px 4px rgba(0, 0, 0, 0.2);
--opacity-hover:0.75;
--opacity-disabled:0.1;

--font-family: ${inter.style.fontFamily};

--color-border: ${(props) => (props.$isDarkModeOn ? "#5B5959" : "lightgrey")};
--color-table: ${(props) => (props.$isDarkModeOn ? "#787575" : "lightgrey")};

--box-shadow-active: ${(props) =>
  props.$isDarkModeOn ? "lightgrey" : "#454444"};



--breakpoint-1: 395px;

}

  body {
    margin: 0;
    font-family: var(--font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: ${(props) => (props.$isDarkModeOn ? "#282828" : "white")};
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding:0;
  }

  button {
    &:active {
    transform: translateY(1px);
  }
  }
`;
