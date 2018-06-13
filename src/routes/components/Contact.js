import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import ContactForm from './ContactForm'
import {
  styled,
  typography,
  color,
  background,
  margin,
  marginTop,
  marginBottom,
  padding,
  mediaDn
} from 'styles/cssFor'

const Container = styled(SimpleContainer)`
  ${background('offWhite')};
`

const ContactContainer = styled.div`
  ${background('white')};
  ${marginTop('xxxl')};
  ${marginBottom('xxxl')};
  ${padding('xl')};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 500px;

  ${mediaDn('sm')} {
    width: 100%;
  }
`

const Header = styled.div`
  ${typography('titleLg')};
  font-weight: 700;
  ${marginBottom('sm')};
  text-align: center;
`

const SubHeader = styled.div`
  ${color('mdGrey')};
  text-align: center;
`

const Contact = () => (
  <Container justifyContent="center">
    <ContactContainer>
      <Header>Say hey.</Header>
      <SubHeader>Btw, we're currently accepting new clients...</SubHeader>
      <ContactForm />
    </ContactContainer>
  </Container>
)

export default Contact
