import React from 'react'
import BigList from 'routes/components/BigList'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import { languages, practices, clients } from 'routes/fixtures/data'
import { withTheme, spacer } from 'styles/getters'

const Competencies = ({ theme }) => (
  <SimpleContainer templateColumns="1fr 1fr 1fr" gap={spacer('xl', { theme })}>
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
)

export default withTheme(Competencies)
