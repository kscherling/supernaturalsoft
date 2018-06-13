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
import Overlay from 'components/Overlay'
import HandWave from 'components/HandWave'

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

const Contact = ({ onClose, active }) => (
  <Overlay onClose={onClose} active={active}>
    <Container justifyContent="center">
      <ContactContainer>
        <Icon>
          <HandWave />
        </Icon>
        <ContactForm />
      </ContactContainer>
    </Container>
  </Overlay>
)

export default Contact
