import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import BigList from 'routes/components/BigList'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'

const IndexRoute = () => (
  <Fragment>
    <Hero />
    <SimpleContainer>
      <PaddedBox>
        <BigList />
      </PaddedBox>
    </SimpleContainer>
  </Fragment>
)

export default IndexRoute
