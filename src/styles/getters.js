import styled, { css } from 'react-emotion'
import { getWithProp } from 'styles/gettersHelpers'

// Getters

export const color = getWithProp('color')
export const fontFamily = getWithProp('fontFamily')
export const fontSize = getWithProp('fontSize')
export const spacer = getWithProp('spacer')
export const lineHeight = getWithProp('lineHeight')
export const breakpoint = getWithProp('breakpoint')

// Exports

export { styled, css }
export { withTheme } from 'emotion-theming'
