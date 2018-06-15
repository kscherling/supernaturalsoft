import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { PoseGroup } from 'react-pose'
import Overlay from './Overlay'
import Portal from './Portal'
import Modal from './Modal'

const ESC = 27

class ModalIndex extends Component {
  static propTypes = {
    dismissable: PropTypes.bool,
    open: PropTypes.bool,
    renderTrigger: PropTypes.func.isRequired,
    renderModal: PropTypes.func.isRequired
  }

  static defaultProps = {
    dismissable: true,
    open: false,
    renderTrigger: () => null,
    renderModal: () => null
  }

  state = {
    open: this.props.open
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)

    if (this.state.open) {
      this.freezeScrolling()
    }
  }

  componentDidUpdate(_, { open: prevOpen }) {
    const { open } = this.state

    if (!prevOpen && open) {
      this.freezeScrolling()
    }

    if (prevOpen && !open) {
      this.resetScrolling()
    }
  }

  componentWillUnmount() {
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

  toggle = () => {
    console.log('toggle')
    this.setState({ open: !this.state.open })
  }

  handleKeydown = e => {
    const { dismissable } = this.props
    const { open } = this.state

    if (!dismissable || !open) {
      return
    }

    switch (e.keyCode) {
      case ESC:
        this.toggle()
        break
      default:
      // do nothing
    }
  }

  render() {
    const { dismissable, renderModal, renderTrigger } = this.props
    const { toggle } = this
    const { open } = this.state

    return (
      <Fragment>
        {renderTrigger({ toggle, open })}
        <Portal>
          <PoseGroup>
            {open && (
              <Overlay key="overlay" onClose={toggle} dismissable={dismissable}>
                <Modal>{renderModal({ toggle, open })}</Modal>
              </Overlay>
            )}
          </PoseGroup>
        </Portal>
      </Fragment>
    )
  }
}

export default ModalIndex
