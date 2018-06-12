import styled from 'react-emotion'
import { transform, transitionTiming } from './styles'

const Label = styled.span`
  display: block;
  padding: 1rem 0;
  transition: transform ${transitionTiming};
  ${props => props.filled && transform};
`

export default Label
