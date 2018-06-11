import React, { Fragment } from 'react'
import { styled, color, marginBottom, typography, lineHeight } from 'styles/css'

const ListContainer = styled.div`
  ${color('mdGray')};
`

const ListTitle = styled.div`
  ${marginBottom('xl')};
`

const List = styled.div`
  ${typography('titleLg')};
`

const ListItem = styled.div``

const BigList = ({ title, items = [] }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <List>
      {items.map((item, idx) => <ListItem key={idx}>{item}</ListItem>)}
    </List>
  </ListContainer>
)

export default BigList
