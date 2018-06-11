import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import Competencies from 'routes/components/Competencies'
import Contact from 'routes/components/Contact'

const IndexRoute = () => (
  <Fragment>
    <Hero />
    <Contact />
    <Competencies />
  </Fragment>
)

export default IndexRoute
