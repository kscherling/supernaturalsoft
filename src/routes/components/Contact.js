import React from 'react'
import SimpleContainer from 'components/SimpleContainer'
import ContactForm from './ContactForm'
import { styled, marginTop, marginBottom, mediaDn } from 'styles/cssFor'
import HandWave from 'components/HandWave'
import Modal from 'components/Modal/index'
import Button from 'components/Button'

const Container = styled(SimpleContainer)`
  height: 100vh;
`

const ContactContainer = styled.div`
  ${marginTop('xxxl')};
  ${marginBottom('xxxl')};
  width: 500px;

  ${mediaDn('sm')} {
    width: 100%;
  }
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  ${marginTop('md')};
  ${marginBottom('xxxl')};
`

const Contact = () => (
  <Modal
    renderTrigger={({ toggle }) => <Button onClick={toggle}>Sey hello</Button>}
    renderModal={({ toggle }) => (
      <Container justifyContent="center">
        <ContactContainer>
          <Icon>
            <HandWave />
          </Icon>
          <ContactForm />
        </ContactContainer>
      </Container>
    )}
  />
)

export default Contact
