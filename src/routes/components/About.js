import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import ContentGroup from 'components/ContentGroup'
import PaddedBox from 'components/PaddedBox'
import Button from 'components/Button'

const About = ({ toggleContactForm }) => (
  <SimpleContainer>
    <PaddedBox>
      <ContentGroup>
        Our team was born from a product group that worked fantastically
        together. We wanted to extend that dynamic to others also pursuing lofty
        & innovative ideas.
      </ContentGroup>
      <br />
      <br />
      <Button onClick={toggleContactForm}>Sey hello</Button>
    </PaddedBox>
  </SimpleContainer>
)

export default About
