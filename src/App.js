import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Logo from 'components/Logo'
import IndexRoute from 'routes/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo fill="white" />
        <Switch>
          <Route path="/" component={IndexRoute} />
        </Switch>
      </div>
    )
  }
}

export default App
