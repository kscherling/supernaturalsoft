import React from 'react'
import styled from 'react-emotion'
import { color, padding } from 'styles/cssFor'
import { spacer } from 'styles/getters'

const Fixed = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.97);
  display: ${({ active }) => (active ? 'hidden' : 'none')};
  ${padding('sm')};
`

const CloseButton = styled.div`
  position: absolute;
  top: ${spacer('sm')};
  right: ${spacer('md')};
  ${color('mdGrey')};
  ${padding('md')};

  &:hover {
    ${color('dkGrey')};
    cursor: pointer;
    touch-action: manipulation;
  }
`

const Overlay = ({ active, onClose, children }) => (
  <Fixed active={active}>
    <CloseButton onClick={onClose}>Close</CloseButton>
    {children}
  </Fixed>
)

export default Overlay
