import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import ContentGroup from 'components/ContentGroup'
import PaddedBox from 'components/PaddedBox'
import SayHello from './SayHello'

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
        Adjunct is a Portland-based boutique software firm specializing in
        quality feature development. Our team was born out of a fully-fledged
        product group that worked well together.
        <br />
        <br />
        <SayHello />
      </ContentGroup>
    </PaddedBox>
  </SimpleContainer>
)

export default About
