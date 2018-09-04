import { injectGlobal } from "styled-components";

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: #333;
    font-family: 'roboto';
    font-size: 16px;
    padding: 0;
    margin: 0 auto;
  }

  ul, ol {
    margin: 0;
    padding: 0;

    li {
        list-style-type: none;
    }
  }

`;
