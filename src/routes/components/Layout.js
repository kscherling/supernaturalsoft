import React from 'react'
import Diagonal from 'routes/components/Diagonal'
import styled from 'react-emotion'

const LayoutContainer = styled.div``

const HeroContainer = styled.div`
  position: relative;
  z-index: 10;
`
const ContentContainer = styled.div`
  position: relative;
  z-index: 20;
`

const Content = styled.div``

const Layout = ({ renderHero, renderContent }) => (
  <LayoutContainer>
    <HeroContainer>{renderHero()}</HeroContainer>
    <ContentContainer>
      <Diagonal reverse />
      <Content>{renderContent()}</Content>
    </ContentContainer>
  </LayoutContainer>
)

export default Layout
