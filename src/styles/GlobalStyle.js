import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  *{
    box-sizing: border-box;
  }
  body{
    padding: 10px;
    margin: 10px;
  }

`;

export default GlobalStyle;
