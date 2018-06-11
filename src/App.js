import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from 'routes/components/Navbar'
import IndexRoute from 'routes/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={IndexRoute} />
        </Switch>
      </div>
    )
  }
}

export default App
