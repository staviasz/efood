import { createGlobalStyle } from 'styled-components';
import { breakPoint } from './variaveis';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    background-color: #fff8f2;

    @media (max-width: ${breakPoint.desktop}) {
      max-width: 80%;
    }
  }
`;

export default GlobalStyle;
