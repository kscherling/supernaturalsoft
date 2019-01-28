import React from 'react'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import SimpleContainer from 'components/SimpleContainer'
import { zIndex, styled, mediaDn } from 'styles/cssFor'

const NavbarBackground = styled(SimpleContainer)`
  height: 140px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${zIndex('navbar')};
`

const NavbarLogo = styled(Link)`
  ${mediaDn('sm')} {
    svg {
      height: 26px !important;
    }
  }
`

const Navbar = () => (
  <NavbarBackground>
    <NavbarLogo to="/">
      <Logo />
    </NavbarLogo>
  </NavbarBackground>
)

export default Navbar
