import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import ContentGroup from 'components/ContentGroup'
import PaddedBox from 'components/PaddedBox'
import Button from 'components/Button'
import BigList from 'routes/components/BigList'

const DoBest = [
  'Features & products out of roadmap reach',
  'Ailing product lines with reboot & sunsetting transitions',
  'API building, documentation and ongoing maintenance',
  'Internal product dashboards that need love',
  'Video transcription offerings (our own API)',
  'Video conferencing (Twilio stack)'
]

const About = ({ toggleContactForm }) => (
  <SimpleContainer>
    <PaddedBox>
      <ContentGroup>
        Our team was born out of a product group that worked well together. What
        we do best:
        <BigList items={DoBest} />
      </ContentGroup>
      <br />
      <br />
      <Button onClick={toggleContactForm}>Sey hello</Button>
    </PaddedBox>
  </SimpleContainer>
)

export default About
