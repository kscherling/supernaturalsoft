import React from 'react'
import Diagonal from 'routes/components/Diagonal'
import styled from 'react-emotion'

const LayoutContainer = styled.div``
const HeroContainer = styled.div``
const ContentContainer = styled.div``
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
