import React from 'react'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color, marginRight } from 'styles/css'

const FooterBackground = styled(SimpleContainer)`
  background: ${color('white')};
  height: 80px;
`

const Copyright = styled.div`
  ${color('mdGray')};
`

const LockupTagline = styled.span`
  ${color('mdGray')};
`
const LockUp = styled.div`
  display: flex;
  align-items: center;
`

const LockupLogo = styled(Logo)`
  margin-top: 2px;
  ${marginRight('sm')};
`

const PullRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => (
  <FooterBackground>
    <Copyright>&copy; 2018 adjunct</Copyright>
    <PullRight>
      <LockUp>
        <LockupLogo height="18px" fill="black" />
        <LockupTagline>awesome tagline</LockupTagline>
      </LockUp>
    </PullRight>
  </FooterBackground>
)

export default Navbar
