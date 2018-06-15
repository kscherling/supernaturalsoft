import React, { Component, Fragment, createRef } from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'
import Overlay from './Overlay'
import Portal from './Portal'
import Modal from './Modal'

const ESC = 27

class ModalIndex extends Component {
  static propTypes = {
    dismissable: PropTypes.bool.isRequired,
    renderTrigger: PropTypes.func.isRequired,
    renderModal: PropTypes.func.isRequired
  }

  static defaultProps = {
    dismissable: true,
    renderTrigger: () => null,
    renderModal: () => null
  }

  state = {
    open: this.props.open || false
  }

  componentDidMount() {
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
              <Overlay key="overlay" onClose={toggle}>
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
