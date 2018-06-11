import React from 'react'
import { styled, css, color } from 'styles/helpers'

const templateColumns = ({ templateColumns }) =>
  templateColumns &&
  css`
    grid-template-columns: ${templateColumns};
  `

const templateRows = ({ templateRows }) =>
  templateRows &&
  css`
    grid-template-rows: ${templateRows};
  `

const justifyContent = ({ justifyContent }) =>
  justifyContent &&
  css`
    justify-content: ${justifyContent};
  `

const alignItems = ({ alignItems }) =>
  alignItems &&
  css`
    align-items: ${alignItems};
  `

const gap = ({ gap }) =>
  gap &&
  css`
    grid-gap: ${gap};
  `

const Flow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
`

const Respond = styled.div`
  width: 1000px;

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
