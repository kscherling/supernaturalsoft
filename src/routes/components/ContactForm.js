import React from 'react'
import {
  styled,
  typography,
  color,
  background,
  padding,
  marginTop,
  marginBottom
} from 'styles/cssFor'
import Input from 'components/Input'

const Container = styled.div`
  ${background('offWhite')};
  ${color('mdGrey')};
  ${marginTop('xl')};
  ${marginBottom('xl')};
  ${padding('xl')};
  text-align: center;
`

const ContactForm = () => (
  <Container>
    <form>
      <Input placeholder="Email to get back to you at" />
      <Input placeholder="Type some things..." />
    </form>
  </Container>
)

export default ContactForm
