import React, { Fragment } from 'react'
import {
  styled,
  color,
  marginBottom,
  typography,
  lineHeight
} from 'styles/cssFor'

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
    <ContentTitle>{title}</ContentTitle>
    <Content>{children}</Content>
  </ContentContainer>
)

export default ContentGroup
