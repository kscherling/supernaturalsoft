import React from 'react'
import { Link } from 'react-router-dom'
import SimpleContainer, { Respond } from 'components/SimpleContainer'
import Logo from 'components/Logo'
import { spacer } from 'styles/getters'
import {
  styled,
  color,
  typography,
  marginBottom,
  mediaUp,
  mediaDn,
  paddingTop,
  paddingBottom
} from 'styles/cssFor'

const TwoColumn = styled(SimpleContainer)`
  ${Respond} {
    grid-auto-flow: row;
    grid-gap: ${spacer('xl')};
    ${paddingTop('xl')};
    ${paddingBottom('xl')};

    ${mediaUp('xl')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaDn('xl')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaDn('lg')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaDn('md')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaDn('sm')} {
      grid-template-columns: 1fr;
    }
  }
`

const Copyright = styled.div``
const FooterLogo = styled(Logo)``
const StyledLink = styled(Link)``
const StyledLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  ${color('mdGrey')};
  ${typography('bodySm')};

  ${Copyright} {
    margin-left: ${spacer('md')};
  }

  ${StyledLink} {
    margin-left: ${spacer('md')};
  }

  ${mediaDn('sm')} {
    justify-content: flex-start;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-gap: ${spacer('md')};

    ${Copyright} {
      margin-left: 0;
    }

    ${StyledLink} {
      margin-left: 0;
    }
  }
`

const Navbar = () => (
  <TwoColumn>
    <FooterLogo height="18px" fill="#ba141a" />
    <StyledLinks>
      <StyledLink to="/privacy">Privacy</StyledLink>
      <StyledLink to="/appgelica">Appgelica by Supernatural</StyledLink>
      <Copyright>&copy; 2018 Supernatural Software</Copyright>
    </StyledLinks>
  </TwoColumn>
)

export default Navbar
