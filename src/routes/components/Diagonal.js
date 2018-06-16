import React from 'react'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { withProps } from 'recompose'
import { color } from 'styles/getters'

const Svg = withProps({
  xmls: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 800 50'
})(styled.svg`
  width: 100%;

  ${({ reverse }) =>
    reverse &&
    css`
      transform: scaleX(-1);
    `};

  ${({ flip }) =>
    flip &&
    css`
      transform: scaleY(-1);
    `};
`)

const Diagonal = ({ theme, fromColor, toColor, reverse, flip, ...args }) => (
  <Svg reverse={reverse} flip={flip} {...args}>
    <polygon points="0,0 800,50 800,0 0,0" fill={color('white', { theme })} />
  </Svg>
)

export default withTheme(Diagonal)
