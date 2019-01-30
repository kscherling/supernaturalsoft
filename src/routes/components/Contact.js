import React from 'react'
import SimpleContainer, { Respond } from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import { withTheme, spacer } from 'styles/getters'
import {
  styled,
  typography,
  marginBottom,
  mediaUp,
  mediaDn,
  paddingTop,
  paddingBottom
} from 'styles/cssFor'

const OneColumn = styled(SimpleContainer)`
  ${Respond} {
    grid-auto-flow: row;
    grid-gap: ${spacer('xl')};
    ${paddingTop('xl')};
    ${paddingBottom('xl')};

    ${mediaUp('xl')} {
      grid-template-columns: repeat(4, 1fr);
    }

    ${mediaDn('xl')} {
      grid-template-columns: repeat(4, 1fr);
    }

    ${mediaDn('lg')} {
      grid-template-columns: repeat(4, 1fr);
    }

    ${mediaDn('md')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaDn('sm')} {
      grid-template-columns: 1fr;
    }
  }
`

const Column = styled.div``
const Title = styled.div`
  ${typography('titleMd')};
  ${marginBottom('md')};
`

const Content = styled.div`
  ${typography('bodyLg')};
`

const Competencies = () => (
  <OneColumn>
    <Column>Let's get started</Column>
  </OneColumn>
)

export default Competencies
