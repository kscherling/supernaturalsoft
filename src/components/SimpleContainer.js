import React from 'react'
import { styled, css, color } from 'styles/getters'
import { curry } from 'utils/fp'
import { cssIfProp } from 'styles/cssHelpers'

const templateColumns = cssIfProp('grid-template-columns', 'templateColumns')
const templateRows = cssIfProp('grid-template-rows', 'templateRows')
const justifyContent = cssIfProp('justify-content', 'justifyContent')
const alignItems = cssIfProp('align-items', 'alignItems')
const gap = cssIfProp('grid-gap', 'gap')

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
