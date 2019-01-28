import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import Callouts from 'routes/components/Callouts'
import Footer from 'routes/components/Footer'

const IndexRoute = () => (
  <Fragment>
    <Hero />
    <Callouts />
    <Footer />
  </Fragment>
)

export default IndexRoute
