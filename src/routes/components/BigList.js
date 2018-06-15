import React from 'react'
import { styled, typography } from 'styles/cssFor'
import ContentGroup from 'components/ContentGroup'

const ListItem = styled.div`
  ${typography('titleLg')};
`

const BigList = ({ title, items = [] }) => (
  <ContentGroup title={title}>
    {items.map((item, idx) => <ListItem key={idx}>{item}</ListItem>)}
  </ContentGroup>
)

export default BigList
