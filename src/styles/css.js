import styled, { css } from 'react-emotion'
import {
  color as colorHelper,
  fontFamily as fontFamilyHelper,
  fontSize as fontSizeHelper
} from 'styles/themeGetters'
import { curry } from 'utils/fp'

export const color = curry(
  (key, props) =>
    css`
      color: ${colorHelper(key, props)};
    `
)

export const background = curry(
  (key, props) =>
    css`
      background: ${colorHelper(key, props)};
    `
)

export const fontFamily = curry(
  (key, props) =>
    css`
      font-family: ${fontFamilyHelper(key, props)};
    `
)

export const fontSize = curry(
  (key, props) =>
    css`
      font-size: ${fontSizeHelper(key, props)};
    `
)

export { styled, css }
export { withTheme } from 'emotion-theming'
