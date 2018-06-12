import React from 'react'
import { styled } from 'styles/css'
import { curry } from 'utils/fp'
import { cssIfProp } from 'styles/cssHelpers'
import {
  templateRows,
  templateColumns,
  justifyContent,
  alignItems,
  gap
} from 'styles/cssIf'

const Flow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
`

const Respond = styled.div`
  width: 1000px;
  display: grid;
  grid-auto-flow: column;

  ${alignItems};
  ${gap};
  ${justifyContent};
  ${templateColumns};
  ${templateRows};
`

const SimpleContainer = ({ children, className, ...rest }) => (
  <Flow className={className}>
    <Respond {...rest}>{children}</Respond>
  </Flow>
)

export default SimpleContainer
