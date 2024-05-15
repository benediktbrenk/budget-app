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

    /* Header */
--header-background-color-1: #6CB9D0;
--header-background-color-2: #8AC6D1;
--header-textColor: black;

    /* Color styles */
  --groceries-color: #FFB6C1;
  --housing-color: #ADD8E6;
  --salary-color: #9370DB;
  --insurance-color: #00CED1;
  --utilities-color: #FFD700;
  --lightgrey: #F5F6F6;
  --amount-color-red: #EF476F;
  --amount-color-green: #06D6A0;

  /* button colors */
  --button: lightgrey;
  --button-submit:aqua;
  --button-edit:lightgreen;
  --button-save:lightblue;
  --button-cancel:lightcoral;
  --button-danger:red;

  /* button hover color */
  --button-hover: darkgray;
  --button-submit-hover:aqua;
  --button-edit-hover:darkgreen;
  --button-save-hover:blue;
  --button-cancel-hover:coral;
  --button-danger-hover:darkred;


    /* Font styles */
  --font-family: ${inter.style.fontFamily};
}

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

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
`;
