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

--color-text-light:black;
--color-text-dark:white;

--color-primary:#4893E9;
--color-secondary-light:#E9EFF2;
--color-secondary-dark:#454444;
--color-background-light:white;
--color-background-dark:#282828;
--color-green:#07B789;
--color-red:#EF476F;
/* --color-highlight-light:;
--color-highlight-dark:; */

--border-radius:8px;
--box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
--opacity-light:0.2;
--opacity-dark:0.2;

/* catergory colors */
--category-groceries:#E468C9;
--category-salary:#7678ED;
--category-housing:#F7B801;
--category-insurance:#F18701;
--category-utilities:#4893E9;


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


    /* Header */
--header-background-color-1: #6CB9D0;
--header-background-color-2: #8AC6D1;
--header-textColor: #4893E9;

    /* Color styles */
  --lightgrey: #F5F6F6;
  --amount-color-red: #EF476F;
  --amount-color-green: #06D6A0;

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
