import React from 'react'
import logoWhite from './logo.svg'
import { Link } from 'react-router-dom'
import SimpleContainer from 'components/SimpleContainer'
import { zIndex, styled } from 'styles/cssFor'

const NavbarBackground = styled(SimpleContainer)`
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${zIndex('navbar')};
`

const NavbarLogo = styled(Link)``

const Navbar = () => (
  <NavbarBackground>
    <NavbarLogo to="/">
      <img src={logoWhite} />
    </NavbarLogo>
  </NavbarBackground>
)

export default Navbar
