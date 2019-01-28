import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from 'routes/components/Navbar'
import IndexRoute from 'routes/index'
import styled from 'react-emotion'

const Test = styled.div`
  height: 100vh;
  background: red;
`

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route path="/" component={IndexRoute} />
    </Switch>
  </Fragment>
)

export default App
