import posed from 'react-pose'
import { zIndex, styled } from 'styles/cssFor'

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
  ${zIndex('modal')};
`

export default Modal
