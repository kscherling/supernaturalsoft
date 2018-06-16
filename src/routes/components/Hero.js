import React from 'react'
import {
  styled,
  color,
  marginBottom,
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
  ${fontFamily('serif')};
`

const HeroCallout = styled.div`
  ${typography('titleXxl')};
  ${color('white')};
  ${marginBottom('md')};
`
const HeroSubhead = styled.div`
  ${color('mdGrey')};
  ${typography('titleLg')};
`

const Hero = () => (
  <HeroContainer>
    <PaddedBox>
      <HeroCallout>Your high velocity product team.</HeroCallout>
      <HeroSubhead>
        A Portland-based boutique software firm specializing in quality feature
        development.
      </HeroSubhead>
    </PaddedBox>
  </HeroContainer>
)

export default Hero
