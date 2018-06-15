import React, { Component, Fragment, createContext } from 'react'
import Backdrop from './Backdrop'
import Body from './Body'
import CancelButton from './CancelButton'
import Container from './Container'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import invariant from 'invariant'
import { createPortal } from 'react-dom'
import { ESC } from '../../utils/keyCodes'
import { Provider } from '../../contexts/Modal'

class Modal extends Component {
  static Body = Body
  static CancelButton = CancelButton
  static Footer = Footer
  static Header = Header
  static Title = Title

  static propTypes = {
    dismissable: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['lg'])
  }

  static defaultProps = {
    dismissable: true
  }

  container = document.createElement('div')
  modalRoot = document.getElementById('modal-root')

  constructor() {
    super()

    if (process.env.NODE_ENV !== 'production') {
      invariant(
        this.modalRoot,
        'This app does not contain a modal root. Follow the steps at ' +
          'https://invent.focusvision.com/Portland/stylist#modals to add one ' +
          'to your app.'
      )
    }
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.container)

    document.addEventListener('keydown', this.handleKeydown)

    if (this.props.open) {
      this.freezeScrolling()
    }
  }

  componentDidUpdate({ open: prevOpen }) {
    const { open } = this.props

    if (!prevOpen && open) {
      this.freezeScrolling()
    }

    if (prevOpen && !open) {
      this.resetScrolling()
    }
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container)
    this.resetScrolling()

    document.removeEventListener('keydown', this.handleKeydown)
  }

  freezeScrolling = () => {
    this.initialBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }

  resetScrolling = () => {
    document.body.style.overflow = this.initialBodyOverflow
  }

  listenForKeydown = () => {
    const { dismissable, open } = this.props

    if (open && dismissable) {
    }
  }

  handleKeydown = e => {
    const { dismissable, open, onClose } = this.props

    if (!dismissable || !open) {
      return
    }

    switch (e.keyCode) {
      case ESC:
        onClose()
      default:
      // do nothing
    }
  }

  render() {
    const { dismissable, children, onClose, open, size } = this.props

    return createPortal(
      <Provider value={{ dismissable, onClose }}>
        <Transition in={open} timeout={300}>
          {state => (
            <Fragment>
              <Backdrop animationState={state} />
              <Container
                animationState={state}
                onClick={dismissable ? onClose : null}
              >
                <Content onClick={e => e.stopPropagation()} size={size}>
                  {children}
                </Content>
              </Container>
            </Fragment>
          )}
        </Transition>
      </Provider>,
      this.container
    )
  }
}

export default Modal
