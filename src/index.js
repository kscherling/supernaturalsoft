import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'
import 'styles/global'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
