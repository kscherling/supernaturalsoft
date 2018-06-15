import styled, { css } from 'react-emotion'
import {
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fontSize
} from 'styles/cssFor'

const reset = ({ theme }) => css`
  border: 0 none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  display: inline-block;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &:focus,
  &:hover {
    cursor: pointer;
    outline: 0;
  }

  &:active {
    background: transparent;
  }

  &:disabled {
    cursor: ;
    pointer-events: none;
    opacity: 0.65;
  }
`

const base = ({ theme }) =>
  css`
    transition: background 0.15s, border 0.15s, color 0.15s, opacity 0.15s;
    font-weight: bold;
    text-align: center;
    line-height: ${theme.lineHeight.bodyMd};
  `

const styleDefault = ({ theme }) =>
  css`
    background: ${theme.color.dkGrey};
    color: ${theme.color.white};

    &:hover {
    }

    &:active {
      background: ${theme.color.black};
    }
  `

const sizeDefault = ({ theme }) =>
  css`
    ${fontSize('titleSm', { theme })};
    ${paddingTop('md', { theme })};
    ${paddingBottom('md', { theme })};
    ${paddingLeft('xl', { theme })};
    ${paddingRight('xl', { theme })};
  `

const block = ({ block }) =>
  block &&
  css`
    width: 100%;
  `

export const Button = styled.button`
  ${reset};
  ${base};
  ${block};
  ${sizeDefault};
  ${styleDefault};
`
export default Button
