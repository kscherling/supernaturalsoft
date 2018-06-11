import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from 'routes/components/Navbar'
import IndexRoute from 'routes/index'
import Footer from 'routes/components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={IndexRoute} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
