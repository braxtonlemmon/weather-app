import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, * {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 18px;
    color: #143642;
  }

  body {
    background: #0F8B8D;
  }
`

export default GlobalStyle;