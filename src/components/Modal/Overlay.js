import React from 'react'
import styled from 'react-emotion'
import { color, padding } from 'styles/cssFor'
import { spacer } from 'styles/getters'
import posed from 'react-pose'

const FixedContainer = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  opacity: 0;
`

const Close = styled.div`
  position: absolute;
  top: ${spacer('sm')};
  right: ${spacer('md')};
  ${color('mdGrey')};
  ${padding('md')};
  z-index: 1020;

  &:hover {
    ${color('dkGrey')};
    cursor: pointer;
    touch-action: manipulation;
  }
`

const Overlay = ({ open, onClose, children, ...args }) => (
  <FixedContainer {...args}>
    <Close onClick={onClose}>Close (esc)</Close>
    {children}
  </FixedContainer>
)

export default Overlay
