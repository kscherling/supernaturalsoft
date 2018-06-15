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
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1010;
`

export default Modal
