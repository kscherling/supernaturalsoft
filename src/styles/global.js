import { injectGlobal } from 'emotion'
import theme from 'styles/theme'
import { color } from 'styles/getters'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900');

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: ${color('dkGrey', { theme })};
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
