import styled, { css } from 'react-emotion'
import { curry, compose, prop, defaultTo } from 'utils/fp'

const warn = (key, props) => {
  console.warn(`Could not find '${key}' in provided props`, props)

  return 'noop'
}
const propOr = curry((key, fallback, obj) => obj[key] || fallback)
const valueOrWarn = curry((key, props, value) => value || warn(key, props))
const getWithThemeCategory = curry((category, key, props) =>
  compose(
    valueOrWarn(key, props),
    prop(key),
    propOr(category, {}),
    propOr('theme', {}),
    defaultTo({})
  )(props)
)

// Getters

export const color = getWithThemeCategory('color')
export const fontFamily = getWithThemeCategory('fontFamily')
export const fontSize = getWithThemeCategory('fontSize')
export const spacer = getWithThemeCategory('spacer')

// Exports

export { styled, css }
export { withTheme } from 'emotion-theming'
