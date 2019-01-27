import React from 'react'
import Logo from 'components/Logo'
import SimpleContainer from 'components/SimpleContainer'
import { styled, color, typography } from 'styles/cssFor'

const FooterBackground = styled(SimpleContainer)`
  background: ${color('white')};
  height: 80px;
`

const Copyright = styled.div`
  ${typography('bodySm')};
  ${color('mdGrey')};
`

const FooterLogo = styled(Logo)``

const PullRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => (
  <FooterBackground>
    <FooterLogo height="18px" fill="#ba141a" />
    <PullRight>
      <Copyright>&copy; 2018 Supernatural Software</Copyright>
    </PullRight>
  </FooterBackground>
)

export default Navbar
