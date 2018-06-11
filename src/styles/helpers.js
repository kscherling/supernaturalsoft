import styled, { css } from 'react-emotion'
import { curry, compose, prop, defaultTo } from 'utils/fp'

const propOr = curry((key, fallback, obj) => obj[key] || fallback)

const warn = (key, props) => {
  console.warn(`Could not find '${key}' in provided props`, props)

  return 'noop'
}
const valueOrWarn = curry((key, props, value) => value || warn(key, props))

export const color = curry((color, props) =>
  compose(
    valueOrWarn(color, props),
    prop(color),
    propOr('colors', {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)

export { styled, css }
export { withTheme } from 'emotion-theming'
