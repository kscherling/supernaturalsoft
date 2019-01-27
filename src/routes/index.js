import React from 'react'
import Hero from 'routes/components/Hero'
import Callouts from 'routes/components/Callouts'
import Layout from 'routes/components/Layout'

const IndexRoute = () => (
  <Layout renderHero={() => <Hero />} renderContent={() => <Callouts />} />
)

export default IndexRoute
