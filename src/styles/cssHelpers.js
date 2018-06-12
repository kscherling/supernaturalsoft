import { css } from 'styles/getters'
import { curry } from 'utils/fp'
import { breakpoint as getBreakpoint } from 'styles/getters'

export const mediaFor = curry(
  (constraint, key, props) =>
    `@media (${constraint}: ${getBreakpoint(key, props)})`
)

export const cssFor = curry(
  (cssAttr, getterFn, key, props) =>
    css`
      ${cssAttr}: ${getterFn(key, props)};
    `
)

export const cssIfProp = curry(
  (cssAttr, prop, props) =>
    props[prop] &&
    css`
      ${cssAttr}: ${props[prop]};
    `
)
