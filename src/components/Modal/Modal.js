import styled from 'react-emotion'
import posed from 'react-pose'

const Modal = styled(
  posed.div({
    enter: { staggerChildren: 100 },
    exit: { staggerChildren: 100, staggerDirection: -1 }
  })
)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1010;
`

export default Modal
