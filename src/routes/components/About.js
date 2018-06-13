import React, { Fragment } from 'react'
import {
  styled,
  color,
  marginBottom,
  typography,
  lineHeight
} from 'styles/cssFor'
import { withTheme, spacer } from 'styles/getters'
import SimpleContainer from 'components/SimpleContainer'
import ContentGroup from 'components/ContentGroup'
import PaddedBox from 'components/PaddedBox'

const About = () => (
  <SimpleContainer>
    <PaddedBox>
      <ContentGroup title="About us">
        Adjunct was born out of a full-fledged product group that worked great
        together and wanted to extend that dynamic to other companies pursuing
        innovative ideas. We are product-driven team with the know how to
        deliver complete, finished features.{' '}
      </ContentGroup>
    </PaddedBox>
  </SimpleContainer>
)

export default About
