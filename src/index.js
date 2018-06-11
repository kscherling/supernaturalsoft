import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'
import 'styles/global'
import App from './App'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styles/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
