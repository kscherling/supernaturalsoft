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
import Button from 'components/Button'

const About = ({ toggleContactForm }) => (
  <SimpleContainer>
    <PaddedBox>
      <ContentGroup>
        Our team was born from a full-fledged product group that worked great
        together. We wanted to extend that dynamic to other companies pursuing
        innovative ideas.
      </ContentGroup>
      <br />
      <br />
      <Button onClick={toggleContactForm}>Sey hello</Button>
    </PaddedBox>
  </SimpleContainer>
)

export default About
