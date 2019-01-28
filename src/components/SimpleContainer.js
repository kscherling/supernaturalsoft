import React from 'react'
import {
  styled,
  css,
  templateRows,
  templateColumns,
  justifyContent,
  alignItems,
  gap
} from 'styles/cssIf'
import { mediaUp, mediaDn, paddingLeft, paddingRight } from 'styles/cssFor'
import { breakpoint as getBreakpoint } from 'styles/getters'

const ifCollapse = ({ collapse, theme }) =>
  collapse &&
  css`
    ${mediaDn('sm', { theme })} {
      grid-auto-flow: row;
      grid-template-columns: unset;
    }
  `

const Flow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${mediaDn('sm')} {
    justify-content: unset;
  }
`

export const Respond = styled.div`
  width: 1000px;
  display: grid;
  grid-auto-flow: column;

  ${alignItems};
  ${gap};
  ${justifyContent};
  ${templateColumns};
  ${templateRows};

  ${mediaUp('xl')} {
    width: ${getBreakpoint('xl')};
  }

  ${mediaDn('xl')} {
    width: ${getBreakpoint('lg')};
  }

  ${mediaDn('lg')} {
    width: ${getBreakpoint('md')};
  }

  ${mediaDn('md')} {
    width: ${getBreakpoint('sm')};
  }

  ${mediaDn('sm')} {
    width: auto;
    ${paddingLeft('xl')};
    ${paddingRight('xl')};
  }

  ${ifCollapse};
`

const SimpleContainer = ({ children, className, ...rest }) => (
  <Flow className={className}>
    <Respond {...rest}>{children}</Respond>
  </Flow>
)

export default SimpleContainer
