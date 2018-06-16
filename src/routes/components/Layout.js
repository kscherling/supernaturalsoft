import React from 'react'
import styled from 'react-emotion'
import { zIndex, background } from 'styles/cssFor'

const LayoutContainer = styled.div``

const HeroContainer = styled.div`
  position: relative;
  ${zIndex('hero')};
`
const ContentContainer = styled.div`
  position: relative;
  ${background('white')};
  ${zIndex('content')};
`

const Layout = ({ renderHero, renderContent }) => (
  <LayoutContainer>
    <HeroContainer>{renderHero()}</HeroContainer>
    <ContentContainer>{renderContent()}</ContentContainer>
  </LayoutContainer>
)

export default Layout
