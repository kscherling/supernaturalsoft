import styled, { css } from 'react-emotion'
import LabelContainer from 'components/Form/_shared/LabelContainer'
import Label from 'components/Form/_shared/Label'
import { color } from 'styles/cssFor'
import { color as getColor } from 'styles/getters'

export const transform = css`
  transform: translate3d(0, -2rem, 0);
`

export const transitionTiming = '0.3s'

export const inputStyles = ({ inline, width, theme }) => css`
  position: relative;
  display: ${inline ? 'inline' : 'block'};
  border: none;
  border-radius: 0;
  font-weight: bold;
  -webkit-appearance: none;

  margin-top: 1.25rem;
  padding: 0.85rem 0;
  width: ${width || '100%'};
  background: transparent;
  color: #595f6e;

  ::placeholder {
    color: transparent;
    transition: color 0.3s;
    will-change: color;
  }

  &:focus {
    outline: none;
    ::placeholder {
      color: inherit;
      opacity: 0.5;
    }
  }

  &:focus + ${LabelContainer} {
    ${color('mdGrey', { theme })};
  }

  &:focus + ${LabelContainer}::after {
    transform: translate3d(0, 0, 0);
  }

  &:focus + ${LabelContainer} ${Label} {
    ${transform};
  }

  &:invalid {
    // Remove Firefox error shadow
    box-shadow: none;
  }

  &:invalid + ${LabelContainer}::after {
    border-bottom-color: ${getColor('dkGrey', { theme })};
    transform: translate3d(0, 0, 0);
  }

  &:invalid:focus + ${LabelContainer}::after {
    border-bottom-color: ${getColor('dkGrey', { theme })};
    transform: translate3d(0, 0, 0);
  }
`
