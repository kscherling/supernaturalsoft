import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'
import 'styles/global'
import App from './App'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
