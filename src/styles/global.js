import { injectGlobal } from "styled-components";

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900');

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
    font-family: 'roboto';
    font-size: 16px;
    color: #333;
  }
`;
