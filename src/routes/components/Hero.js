import React from 'react'
import {
  styled,
  color,
  background,
  fontFamily,
  typography
} from 'styles/cssFor'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'

const HeroContainer = styled(SimpleContainer)`
  ${color('white')};
  ${background('black')};
`

const HeroCallout = styled(PaddedBox)`
  ${color('mdGrey')};
  ${fontFamily('serif')};
  ${typography('titleXl')};

  strong {
    ${color('white')};
  }
`

const Hero = () => (
  <HeroContainer>
    <HeroCallout>
      Your high velocity <strong>product team</strong>.
      <br />
      We move fast, break things.
    </HeroCallout>
  </HeroContainer>
)

export default Hero

// Move fast and break things.
