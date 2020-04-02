import { createGlobalStyle } from 'styled-components';
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "gothic";
    src: url(/fonts/Gothic/Gothic.wof);
    src: url(/fonts/Gothic/Gothic.eot);
    src: url(/fonts/Gothic/Gothic.svg);
    src: url(/fonts/Gothic/Gothic.ttf);
  }
  @font-face {
    font-family: "gothicBold";
    src: url(/fonts/GothicB/GothicB.eot);
    src: url(/fonts/GothicB/GothicB.svg);
    src: url(/fonts/GothicB/GothicB.ttf);
    src: url(/fonts/GothicB/GothicB.woff);
  }
  @font-face {
    font-family: "helveticaRoman";
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.eot");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.svg");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.ttf");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.woff");
  }
  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/UbuntuBoldItalics/UbuntuBoldItalics.ttf");
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "helveticaRoman", sans-serif;
    color: ${variables.colors.grey};
    font-size: 16px;
  }
  header {
    padding: 2em 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .container {
    min-height: 
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "gothic", san-serif;
  }
  section {
    width: 100%;
  }
`;

export default GlobalStyle;
