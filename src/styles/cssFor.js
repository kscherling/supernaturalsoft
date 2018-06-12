import styled, { css } from 'react-emotion'
import {
  color as getColor,
  fontFamily as getFontFamily,
  fontSize as getFontSize,
  spacer as getSpacer,
  lineHeight as getLineHeight
} from 'styles/getters'
import { curry } from 'utils/fp'
import mediaFor from 'styles/helpers/mediaFor'
import cssFor from 'styles/helpers/cssFor'

export const background = cssFor('background', getColor)

export const color = cssFor('color', getColor)
export const fontFamily = cssFor('font-family', getFontFamily)
export const fontSize = cssFor('font-size', getFontSize)
export const lineHeight = cssFor('line-height', getLineHeight)
export const typography = curry(
  (key, props) => css`
    ${fontSize(key, props)};
    ${lineHeight(key, props)};
  `
)

export const margin = cssFor('margin', getSpacer)
export const marginTop = cssFor('margin-top', getSpacer)
export const marginBottom = cssFor('margin-bottom', getSpacer)
export const marginLeft = cssFor('margin-left', getSpacer)
export const marginRight = cssFor('margin-right', getSpacer)

export const padding = cssFor('padding', getSpacer)
export const paddingTop = cssFor('padding-top', getSpacer)
export const paddingBottom = cssFor('padding-bottom', getSpacer)
export const paddingLeft = cssFor('padding-left', getSpacer)
export const paddingRight = cssFor('padding-right', getSpacer)

export const mediaUp = mediaFor('min-width')
export const mediaDn = mediaFor('max-width')

export { styled, css }
export { withTheme } from 'emotion-theming'
