import React from 'react'
import styled from 'react-emotion'
import { zIndex, background } from 'styles/cssFor'
import Footer from 'routes/components/Footer'

const LayoutContainer = styled.div`
  ${background('offWhite')};
`

const HeroContainer = styled.div`
  position: relative;
  ${zIndex('hero')};
  height: 100vh;
`
const ContentContainer = styled.div`
  position: relative;
  ${background('white')};
  ${zIndex('content')};
`

const Layout = ({ renderHero, renderContent }) => (
  <LayoutContainer>
    {renderHero()}
    <ContentContainer>
      {renderContent()}
      <Footer />
    </ContentContainer>
  </LayoutContainer>
)

export default Layout
