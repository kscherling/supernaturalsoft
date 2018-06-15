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
  height: 60vh;
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
      We are a portland-based boutique software firm specializing in quality
      feature development.
    </HeroCallout>
  </HeroContainer>
)

export default Hero
