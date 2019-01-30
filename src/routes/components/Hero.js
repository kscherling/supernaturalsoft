import React from 'react'
import { styled, color, background, typography } from 'styles/cssFor'
import SimpleContainer from 'components/SimpleContainer'
import { mediaUp, mediaDn } from 'styles/cssFor'

const HeroContainer = styled.div`
  height: 60vh;
  text-align: center;
  display: flex;
  background: url('/assets/supernatural_clouds.jpg') center center no-repeat;
  background-size: cover;
`

const Fill = styled(SimpleContainer)`
  flex: 1;
`

const Title = styled.div`
  ${typography('titleXxl')};
  ${color('white')};
  z-index: 4;

  ${mediaDn('md')} {
    ${typography('titleXl')};
  }
`

const StyledLink = styled.a`
  text-decoration: underline;
  opacity: 0.5;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }
`

const Hero = () => (
  <HeroContainer>
    <Fill>
      <Title>
        Experienced software <br />product management help is{' '}
        <StyledLink href="#">here</StyledLink>
      </Title>
    </Fill>
  </HeroContainer>
)

export default Hero
