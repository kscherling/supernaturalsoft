import React from 'react'
import Logo from 'components/Logo'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color, marginRight } from 'styles/cssFor'

const FooterBackground = styled(SimpleContainer)`
  background: ${color('white')};
  height: 80px;
`

const Copyright = styled.div`
  ${color('mdGrey')};
`

const FooterLogo = styled(Logo)`
  margin-top: 2px;
  ${marginRight('sm')};
`

const PullRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => (
  <FooterBackground>
    <Copyright>&copy; 2018</Copyright>
    <PullRight>
      <FooterLogo height="18px" fill="red" />
    </PullRight>
  </FooterBackground>
)

export default Navbar
