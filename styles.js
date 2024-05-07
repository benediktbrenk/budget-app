import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
  --groceries-color: #F5A623;
  --housing-color: #7ED321;
  --salary-color: #4A90E2; 
  --insurance-color: #FF6347; 
  --utilities-color: #9013FE; 
  --default-color: #CCCCCC;
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
