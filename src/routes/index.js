import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import Callouts from 'routes/components/Callouts'
import Footer from 'routes/components/Footer'
import Navbar from 'routes/components/Navbar'

const IndexRoute = () => (
  <Fragment>
    <Navbar />
    <Hero />
    <Callouts />
    <Footer />
  </Fragment>
)

export default IndexRoute
