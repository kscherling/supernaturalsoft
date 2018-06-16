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
import { breakpoint } from 'styles/getters'
import SimpleContainer from 'components/SimpleContainer'
import PaddedBox from 'components/PaddedBox'
import Diagonal from 'routes/components/Diagonal'
import About from 'routes/components/About'
import { mediaUp, mediaDn } from 'styles/cssFor'
import SayHello from './SayHello'
import ContentGroup from 'components/ContentGroup'

const HeroContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr auto;
`

const Top = styled.div`
  ${fontFamily('serif')};
  display: flex;
  position: relative;
  z-index: 1;
`

const Bottom = styled.div`
  ${background('white')};
  z-index: 1;
`

const Fill = styled(SimpleContainer)`
  flex: 1;
`

const FixImage = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
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
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.95) 100%
  );
  z-index: 0;
`

const Title = styled.div`
  ${typography('titleXxl')};
  ${color('white')};
  ${marginBottom('md')};
  z-index: 4;

  ${mediaDn('md')} {
    ${typography('titleLg')};
  }
`

const Subtitle = styled.div`
  ${color('mdGrey')};
  ${typography('titleLg')};
  ${marginBottom('xl')};

  ${mediaDn('md')} {
    ${typography('titleSm')};
  }
`

const Highlight = styled.span`
  display: inline-block;
  ${paddingLeft('md')};
  ${paddingRight('md')};
  background: rgba(255, 255, 255, 0.1);
`

const StyledDiagonal = styled(Diagonal)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 4;
`

const Hero = () => (
  <HeroContainer>
    <Top>
      <Fill>
        <Title>
          Your high velocity <Highlight>product team</Highlight>
        </Title>
      </Fill>
      <StyledDiagonal flip />
    </Top>
    <Bottom>
      <SimpleContainer>
        <PaddedBox>
          <Subtitle>
            Adjunct is a Portland-based boutique software firm specializing in
            quality feature development. Our team was born out of a
            fully-fledged product group that worked fantastically well together.
            We think you'll agree.
          </Subtitle>
          <SayHello />
        </PaddedBox>
      </SimpleContainer>
    </Bottom>
    <FixImage />
    <GradientOverlay />
  </HeroContainer>
)

export default Hero
