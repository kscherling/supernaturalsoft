import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import ContactForm from './ContactForm'
import { styled, typography, color, marginBottom } from 'styles/cssFor'

const Header = styled.div`
  ${typography('titleLg')};
  font-weight: 700;
  ${marginBottom('sm')};
`

const SubHeader = styled.div`
  ${color('mdGrey')};
`

const Contact = () => (
  <SimpleContainer>
    <PaddedBox>
      <Header>Say hey.</Header>
      <SubHeader>BTW, we're currently accepting new clients...</SubHeader>
      <ContactForm />
    </PaddedBox>
  </SimpleContainer>
)

export default Contact
