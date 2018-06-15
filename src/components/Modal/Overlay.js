import styled, { css } from 'react-emotion'

const animationState = ({ animationState }) => {
  switch (animationState) {
    case 'entering':
    case 'entered':
      return css`
        visibility: visible;
        opacity: 1;
      `
    case 'exiting':
    case 'exited':
      return css`
        visibility: hidden;
        opacity: 0;
      `
    default:
    // do nothing
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transition: all 0.3s;
  z-index: 1049;

  ${animationState};
`

export default Backdrop
