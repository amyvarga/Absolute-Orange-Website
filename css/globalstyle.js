import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gothic";
    src: url(/fonts/Gothic/Regular/Gothic.wof);
    src: url(/fonts/Gothic/Regular/Gothic.eot);
    src: url(/fonts/Gothic/Regular/Gothic.svg);
    src: url(/fonts/Gothic/Regular/Gothic.ttf);
  }
  @font-face {
    font-family: "GothicBold";
    src: url(/fonts/Gothic/Bold/GothicB.eot);
    src: url(/fonts/Gothic/Bold/GothicB.svg);
    src: url(/fonts/Gothic/Bold/GothicB.ttf);
    src: url(/fonts/Gothic/Bold/GothicB.woff);
  }
  @font-face {
    font-family: "helveticaRoman";
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.eot");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.svg");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.ttf");
    src: url("/fonts/Helvetica55Roman/Helvetica55Roman.woff");
  }
  @font-face {
    font-family: "QuicksandRegular";
    src: url("/fonts/Quicksand/Regular/quicksand-regular-webfont.woff");
    src: url("/fonts/Quicksand/Regular/quicksand-regular-webfont.woff2");
  }
  @font-face {
    font-family: "QuicksandLight";
    src: url("/fonts/Quicksand/Light/quicksand-light-webfont.woff");
    src: url("/fonts/Quicksand/Light/quicksand-light-webfont.woff2");
  }
  @font-face {
    font-family: "QuicksandBold";
    src: url("/fonts/Quicksand/Bold/quicksand-bold-webfont.woff");
    src: url("/fonts/Quicksand/Bold/quicksand-bold-webfont.woff2");
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "QuicksandLight", sans-serif;
    color: ${variables.colors.grey};
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: 0.75em;
    color: ${variables.colors.grey};
    overflow-wrap: break-word;
  }
  * {
    box-sizing: border-box;
    
  }
 
  img {
    width: 100%;
  }
`;

export default GlobalStyle;
