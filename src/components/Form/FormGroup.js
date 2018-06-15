import styled, { css } from 'react-emotion'
import { marginTop } from 'styles/cssFor'
import posed from 'react-pose'

const buttons = ({ buttons }) =>
  buttons &&
  css`
    display: flex;
    justify-content: flex-end;
  `

const FormGroup = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
  })
)`
  & + & {
    ${marginTop('sm')};
  }

  ${buttons};
`

export default FormGroup
