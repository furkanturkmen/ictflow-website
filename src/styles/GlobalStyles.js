import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'PP Neue Montreal', 'Segoe UI', sans-serif;
    background-color: #f9f9f9;
    background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url('/assets/pattern.png');
    background-repeat: repeat;
    background-size: auto;
    min-height: 100vh;
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
