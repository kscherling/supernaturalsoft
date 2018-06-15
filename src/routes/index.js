import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import Competencies from 'routes/components/Competencies'
import Layout from 'routes/components/Layout'
import About from 'routes/components/About'

const IndexRoute = () => (
  <Layout
    renderHero={() => <Hero />}
    renderContent={() => (
      <Fragment>
        <About />
        <Competencies />
      </Fragment>
    )}
  />
)

export default IndexRoute
