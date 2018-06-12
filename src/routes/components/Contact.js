import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import {
  styled,
  typography,
  color,
  background,
  padding,
  marginTop,
  marginBottom
} from 'styles/cssFor'

const Header = styled.div`
  ${typography('titleLg')};
  font-weight: 700;
`

const SubHeader = styled.div`
  ${color('mdGrey')};
`

const ContactForm = styled.div`
  ${background('offWhite')};
  ${color('mdGrey')};
  ${marginTop('xl')};
  ${marginBottom('xl')};
  ${padding('xl')};
  text-align: center;
`

const Contact = () => (
  <SimpleContainer>
    <PaddedBox>
      <Header>Say hi!</Header>
      <SubHeader>Psst, we're currently accepting new clients...</SubHeader>
      <ContactForm>Contact form here</ContactForm>
    </PaddedBox>
  </SimpleContainer>
)

export default Contact
