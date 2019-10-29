import { css } from "@emotion/core";
import light from "./font/light.woff2";
import book from "./font/book.woff2";
import regular from "./font/regular.woff2";
import bold from "./font/bold.woff2";

export const globalCss = css`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: texta;
  }
  html {
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: texta;
    font-style: normal;
    font-weight: 100;
    src: url("${light}") format("woff2");
  }
  @font-face {
    font-family: texta;
    font-style: normal;
    font-weight: 300;
    src: url("${book}") format("woff2");
  }
  @font-face {
    font-family: texta;
    font-style: normal;
    font-weight: 500;
    src: url("${regular}") format("woff2");
  }
  @font-face {
    font-family: texta;
    font-style: normal;
    font-weight: 700;
    src: url("${bold}") format("woff2");
  }
`;
