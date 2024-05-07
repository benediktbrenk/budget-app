import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
 --amount-color-red: #EF476F;
 --amount-color-green: #06D6A0;
 --lightgrey: #F5F6F6;

}

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h1 {
    margin: 0;
  }
ul{
margin: 0;
padding:0;
}
`;
