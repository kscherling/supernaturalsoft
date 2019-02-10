import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexRoute from 'routes/index'
import styled from 'react-emotion'
import PrivacyRoute from './routes/privacy'

const Test = styled.div`
  height: 100vh;
  background: red;
`

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/privacy" component={PrivacyRoute} />
      <Route path="/" component={IndexRoute} />
    </Switch>
  </Fragment>
)

export default App
