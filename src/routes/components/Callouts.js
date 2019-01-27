import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import { withTheme, spacer } from 'styles/getters'
import { styled, typography, marginBottom } from 'styles/cssFor'

const SubTitle = styled.div`
  ${typography('titleMd')};
  ${marginBottom('md')};
`

const Content = styled.div`
  ${typography('bodyLg')};
`

const Competencies = ({ theme }) => (
  <SimpleContainer
    collapse
    templateColumns="1fr 1fr 1fr 1fr"
    gap={spacer('xl', { theme })}
  >
    <PaddedBox>
      <SubTitle>Product Ownership</SubTitle>
      <Content>
        Set a template for how someone in your org should be taking
        responsibility for a product line, as well as the honest brokering of
        authority vs project guidance by the executive team. Have supernatural
        stand in as a product owner as a model, train up, then hand over the
        reins.
      </Content>
    </PaddedBox>
    <PaddedBox>
      <SubTitle>Specs + Tickets</SubTitle>
      <Content>
        Hand over the writing of a single spec, with ticket breakouts included.
        Tickets can also include a preliminary engineering estimate and testing
        requirements if desired. This has at times been ideal for a spec for a
        prototype whereby funding was limited and work definition critical.
      </Content>
    </PaddedBox>
    <PaddedBox>
      <SubTitle>Documentation</SubTitle>
      <Content>
        Fallen behind on JIRA, Confluence, Trello techniques? Lightweight
        options to get caught up and new skills on how to make documenting
        actually widely appreciated as opposed to a pointless chore.
      </Content>
    </PaddedBox>
    <PaddedBox>
      <SubTitle>Software Development</SubTitle>
      <Content>
        In certain situations, supernatural will contract out or apply
        development services to very well defined mid-sized projects. We provide
        product consulting services, but in situations where a build requires a
        high-degree of PM/eng coordination, we can supply the right engineer.
      </Content>
    </PaddedBox>
  </SimpleContainer>
)

export default withTheme(Competencies)
