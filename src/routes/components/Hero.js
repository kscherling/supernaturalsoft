import React from 'react'
import {
  styled,
  color,
  background,
  fontFamily,
  fontSize,
  marginTop,
  marginBottom
} from 'styles/css'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'

const HeroContainer = styled(SimpleContainer)`
  ${color('white')};
  ${background('black')};
`

const HeroCallout = styled(PaddedBox)`
  ${color('mdGray')};
  ${fontFamily('serif')};
  ${fontSize('titleXl')};
  line-height: 52px;

  strong {
    ${color('white')};
  }
`

const Hero = () => (
  <HeroContainer>
    <HeroCallout>
      Here are a bunch of <strong>really inspiring marketing words</strong> that
      make us look chill but totes competent. We're really good at what we do,
      but we act like we don't know. Seriously though, we're good...and
      humble...but really freaking good.
    </HeroCallout>
  </HeroContainer>
)

export default Hero
