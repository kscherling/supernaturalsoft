import React from 'react'
import { styled, color, background, fontFamily, fontSize } from 'styles/css'
import SimpleContainer from 'components/SimpleContainer'

const HeroContainer = styled(SimpleContainer)`
  ${color('white')};
  ${background('black')};
  height: 300px;
`

const HeroCallout = styled.div`
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
      <strong>Here are a bunch</strong> of really inspiring marketing words that
      will make us look cool but competent. Let's build it.
    </HeroCallout>
  </HeroContainer>
)

export default Hero
