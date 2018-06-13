import styled, { css } from 'react-emotion'
import { marginTop } from 'styles/cssFor'

const buttons = ({ buttons }) =>
  buttons &&
  css`
    display: flex;
    justify-content: flex-end;
  `

const FormGroup = styled.div`
  & + & {
    ${marginTop('sm')};
  }

  ${buttons};
`

export default FormGroup
