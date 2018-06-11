import styled, { css } from 'react-emotion'
import {
  color as getColor,
  fontFamily as getFontFamily,
  fontSize as getFontSize,
  spacer as getSpacer
} from 'styles/getters'
import { cssFor } from 'styles/cssHelpers'
import { curry } from 'utils/fp'

export const color = cssFor('color', getColor)
export const background = cssFor('background', getColor)

export const fontFamily = cssFor('font-family', getFontFamily)
export const fontSize = cssFor('font-size', getFontSize)

export const margin = cssFor('margin', getSpacer)
export const marginTop = cssFor('margin-top', getSpacer)
export const marginBottom = cssFor('margin-bottom', getSpacer)
export const marginLeft = cssFor('margin-left', getSpacer)
export const marginRight = cssFor('margin-right', getSpacer)

export { styled, css }
export { withTheme } from 'emotion-theming'
