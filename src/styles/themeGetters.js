import styled, { css } from 'react-emotion'
import { curry, compose, prop, defaultTo } from 'utils/fp'

const propOr = curry((key, fallback, obj) => obj[key] || fallback)

const warn = (key, props) => {
  console.warn(`Could not find '${key}' in provided props`, props)

  return 'noop'
}
const valueOrWarn = curry((key, props, value) => value || warn(key, props))

// Getters

export const color = curry((key, props) =>
  compose(
    valueOrWarn(key, props),
    prop(key),
    propOr('colors', {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)

export const fontFamily = curry((key, props) =>
  compose(
    valueOrWarn(key, props),
    prop(key),
    propOr('fontFamily', {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)

export const fontSize = curry((key, props) =>
  compose(
    valueOrWarn(key, props),
    prop(key),
    propOr('fontSize', {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)

// Exports

export { styled, css }
export { withTheme } from 'emotion-theming'
