import styled from 'react-emotion'
import { transitionTiming } from './styles'
import { color } from 'styles/cssFor'
import { color as getColor } from 'styles/getters'

const LabelContainer = styled.label`
  font-weight: bold;
  font-size: 0.85rem;
  user-select: none;
  ${color('ltGrey')};

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 1.25rem);
  text-align: left;
  pointer-events: none;
  transition: color ${transitionTiming};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${getColor('ltGrey')};
  }

  &::after {
    border-bottom: 2px solid;
    transform: translate3d(-100%, 0, 0);
    transition: transform ${transitionTiming};
    border-color: ${getColor('black')};
  }
`

export default LabelContainer
