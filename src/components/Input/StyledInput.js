import { transform } from './styles'
import LabelContainer from './LabelContainer'
import Label from './Label'
import styled from 'react-emotion'
import { color } from 'styles/cssFor'
import { color as getColor } from 'styles/getters'

const StyledInput = styled.input`
  position: relative;
  display: ${props => (props.inline ? 'inline' : 'block')};
  border: none;
  border-radius: 0;
  font-weight: bold;
  -webkit-appearance: none;

  margin-top: 1.25rem;
  padding: 0.85rem 0;
  width: ${props => props.width || '100%'};
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
    ${color('mdGrey')};
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
    border-bottom-color: ${getColor('dkGrey')};
    transform: translate3d(0, 0, 0);
  }

  &:invalid:focus + ${LabelContainer}::after {
    border-bottom-color: ${getColor('dkGrey')};
    transform: translate3d(0, 0, 0);
  }
`

export default StyledInput
