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

const FourColumn = styled(SimpleContainer)`
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
const SubTitle = styled.div`
  ${typography('titleMd')};
  ${marginBottom('md')};
`

const Content = styled.div`
  ${typography('bodyLg')};
`

const Competencies = () => (
  <FourColumn>
    <Column>
      <SubTitle>Product Ownership</SubTitle>
      <Content>
        Establish a new norm for how your org takes
        responsibility for product lines.  Revisit whether there is honest brokering of
        authority versus project guidance by the executive team. Have Supernatural
        stand in as a product owner as a model, train up, then hand over the
        reins.
      </Content>
    </Column>
    <Column>
      <SubTitle>Specs + Tickets</SubTitle>
      <Content>
        Hand over to us the writing of a single spec with ticket breakouts included.
        Tickets can include a preliminary engineering estimate and testing
        requirements if desired. This has at times been ideal for a spec for a
        prototype whereby funding was limited and work definition critical.
      </Content>
    </Column>
    <Column>
      <SubTitle>Documentation</SubTitle>
      <Content>
        Fallen behind on JIRA, Confluence, Trello techniques? Lightweight
        options to get caught up and new skills to make documenting
        a useful activity as opposed to a pointless chore.
      </Content>
    </Column>
    <Column>
      <SubTitle>Software Development</SubTitle>
      <Content>
        In certain situations, Supernatural will contract out or apply
        development services to very well-defined projects. We provide
        product consulting services, but in situations where a build requires a
        high-degree of PM/eng coordination, we can supply the right engineers.
      </Content>
    </Column>
  </FourColumn>
)

export default Competencies
