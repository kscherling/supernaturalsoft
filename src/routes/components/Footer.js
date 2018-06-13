import React from 'react'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color, marginRight } from 'styles/cssFor'

const FooterBackground = styled(SimpleContainer)`
  background: ${color('white')};
  height: 80px;
`

const Copyright = styled.div`
  ${color('mdGrey')};
`

const LockupTagline = styled.span`
  ${color('mdGrey')};
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

const Hold = () => (
  <LockUp>
    <LockupLogo height="18px" fill="black" />
    <LockupTagline>let's build it</LockupTagline>
  </LockUp>
)

const Navbar = () => (
  <FooterBackground>
    <Copyright>&copy; 2018</Copyright>
    <PullRight>
      <LockupLogo height="18px" fill="black" />
    </PullRight>
  </FooterBackground>
)

export default Navbar
