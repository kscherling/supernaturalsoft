import React from 'react'
import Hero from 'routes/components/Hero'
import Competencies from 'routes/components/Competencies'
import Layout from 'routes/components/Layout'

const IndexRoute = () => (
  <Layout renderHero={() => <Hero />} renderContent={() => <Competencies />} />
)

export default IndexRoute
