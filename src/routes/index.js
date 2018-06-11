import React, { Fragment } from 'react'
import Hero from 'routes/components/Hero'
import BigList from 'routes/components/BigList'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import { languages, practices, clients } from 'routes/fixtures/data'
import { withTheme, spacer } from 'styles/getters'

const IndexRoute = ({ theme }) => (
  <Fragment>
    <Hero />
    <SimpleContainer
      templateColumns="1fr 1fr 1fr"
      gap={spacer('xl', { theme })}
    >
      <PaddedBox>
        <BigList title="Technologies" items={languages} />
      </PaddedBox>
      <PaddedBox>
        <BigList title="Practices" items={practices} />
      </PaddedBox>
      <PaddedBox>
        <BigList title="Work" items={clients} />
      </PaddedBox>
    </SimpleContainer>
  </Fragment>
)

export default withTheme(IndexRoute)
