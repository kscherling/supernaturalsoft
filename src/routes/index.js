import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import Competencies from 'routes/components/Competencies'
import Contact from 'routes/components/Contact'
import Layout from 'routes/components/Layout'

const IndexRoute = () => (
  <Layout
    renderHero={() => <Hero />}
    renderContent={() => (
      <Fragment>
        <Contact />
        <Competencies />
      </Fragment>
    )}
  />
)

export default IndexRoute
