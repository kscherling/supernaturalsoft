import React from 'react'
import Logo from 'components/Logo'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color } from 'styles/helpers'

const Background = styled(SimpleContainer)`
  background: ${color('dkGray')};
`

const Navbar = () => (
  <Background>
    <Logo fill="white" />
  </Background>
)

export default Navbar
