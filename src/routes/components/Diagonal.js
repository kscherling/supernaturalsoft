import React from 'react'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { withProps } from 'recompose'
import { color } from 'styles/getters'

const Svg = withProps({
  xmls: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 801 50'
})(styled.svg`
  width: 100%;

  ${({ reverse }) =>
    reverse &&
    css`
      transform: scaleX(-1);
    `};
`)

const Diagonal = ({ theme, fromColor, toColor, reverse }) => (
  <Svg reverse={reverse}>
    <rect x="0" width="801" height="50" fill={color('black', { theme })} />
    <polygon points="801 50,0,50 0,0 " fill={color('white', { theme })} />
  </Svg>
)

// fill={color('white', { theme })
export default withTheme(Diagonal)