import React from 'react'
import { styled, css, color } from 'styles/getters'
import { curry } from 'utils/fp'

const styleIf = curry(
  (cssAttr, prop, props) =>
    props[prop] &&
    css`
      ${cssAttr}: ${props[prop]};
    `
)

const templateColumns = styleIf('grid-template-columns', 'templateColumns')
const templateRows = styleIf('grid-template-rows', 'templateRows')
const justifyContent = styleIf('justify-content', 'justifyContent')
const alignItems = styleIf('align-items', 'alignItems')
const gap = styleIf('grid-gap', 'gap')

const Flow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
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
