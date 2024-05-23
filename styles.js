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


--color-primary:#4893E9;

--color-secondary: ${(props) => (props.$isDarkModeOn ? "#454444" : "#E9EFF2")};
--color-secondary-light:#E9EFF2;
--color-secondary-dark:#454444;
--color-background-light:white;
--color-background-dark:#282828;
--color-green:#07B789;
--color-red:#EF476F;

--border-radius:8px;
--box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
--box-shadow-nav: 0 -2px 4px rgba(0, 0, 0, 0.2);
--opacity-hover:0.75;
--opacity-disabled:0.1;

--font-family: ${inter.style.fontFamily};

}

  body {
    margin: 0;
    padding: 0;
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

  /* input, select, textarea {
    color: black; 
    -webkit-text-fill-color: black; 
  }

  input:-webkit-autofill, 
  textarea:-webkit-autofill, 
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: black !important;
  } */

`;
