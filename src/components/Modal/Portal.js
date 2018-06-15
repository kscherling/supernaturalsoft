import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'

class Portal extends Component {
  root = document.getElementById('modal-root')
  el = document.createElement('div')

  componentDidMount() {
    this.root.appendChild(this.el)
  }

  componentWillUnmount() {
    this.root.removeChild(this.el)
  }

  render() {
    const { children } = this.props

    return createPortal(children, this.el)
  }
}

export default Portal
