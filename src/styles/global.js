import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.7;
    background-color: #f9f9f9;
    color: #080808;
  }
`;
