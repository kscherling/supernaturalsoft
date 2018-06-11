import React from 'react'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color } from 'styles/themeGetters'

const NavbarBackground = styled(SimpleContainer)`
  background: ${color('black')};
  height: 80px;
`

const NavbarLogo = styled(Link)``

const Navbar = () => (
  <NavbarBackground>
    <NavbarLogo to="/">
      <Logo fill="white" />
    </NavbarLogo>
  </NavbarBackground>
)

export default Navbar
