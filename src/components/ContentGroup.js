import React from 'react'
import { styled, color, marginBottom, typography } from 'styles/cssFor'

const ContentContainer = styled.div`
  ${color('mdGrey')};
`

const ContentTitle = styled.div`
  ${marginBottom('xl')};
`

const Content = styled.div`
  ${typography('titleLg')};
`

const ContentGroup = ({ title, children }) => (
  <ContentContainer>
    {title ? <ContentTitle>{title}</ContentTitle> : null}
    <Content>{children}</Content>
  </ContentContainer>
)

export default ContentGroup
