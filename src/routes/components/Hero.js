import React from 'react'
import {
  styled,
  color,
  marginBottom,
  background,
  fontFamily,
  typography,
  padding,
  paddingRight,
  paddingLeft
} from 'styles/cssFor'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import Diagonal from 'routes/components/Diagonal'

const HeroContainer = styled(SimpleContainer)`
  height: 72vh;
  position: relative;
`

const FixImage = styled.div`
  position: fixed;
  top: 0;
  height: 72vh;
  left: 0;
  right: 0;
  background: url('/assets/towne_storage.jpg') center center no-repeat;
  background-size: cover;
  z-index: 0;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.99) 100%
  );
  z-index: 1;
`

const HeroContent = styled(PaddedBox)`
  ${fontFamily('serif')};
  position: relative;
  z-index: 2;
`

const HeroCallout = styled.div`
  ${typography('titleXxl')};
  ${color('white')};
  ${marginBottom('md')};
`

const Highlight = styled.strong`
  display: inline-block;
  ${paddingLeft('md')};
  ${paddingRight('md')};
  background: rgba(255, 255, 255, 0.1);
`

const HeroSubhead = styled.div`
  ${typography('titleLg')};
  ${color('mdGrey')};
`

const StyledDiagonal = styled(Diagonal)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 3;
`

const Hero = () => (
  <HeroContainer>
    <FixImage />
    <GradientOverlay />
    <HeroContent>
      <HeroCallout>
        Your high velocity <Highlight>product team</Highlight>
      </HeroCallout>
      <HeroSubhead>
        We are a Portland-based boutique software firm specializing in quality
        feature development.
      </HeroSubhead>
    </HeroContent>
    <StyledDiagonal flip />
  </HeroContainer>
)

export default Hero
