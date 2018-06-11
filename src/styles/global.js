import { injectGlobal } from 'emotion'
import theme from 'styles/theme'
import { color } from 'styles/helpers'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Roboto+Slab:400,700');

  html {
    box-sizing: border-box;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *, *:before, *:after { box-sizing: inherit; }

  body {
    font-family: 'Lato', sans-serif;
    color: red;
    color: ${color('dkGray', { theme })};
  }

  a {
    text-decoration: none;
    color: currentColor;
    transition: all 0.1s ease-in-out;
    touch-action: manipulation;

    &:hover {
      text-decoration: underline;
    }
  }

`
