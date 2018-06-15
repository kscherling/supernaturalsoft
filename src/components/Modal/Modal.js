import React from 'react'
import styled from 'react-emotion'
import posed from 'react-pose'

const Modal = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
  })
)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1010;
`

export default Modal
