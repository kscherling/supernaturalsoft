import React, { Component, Fragment } from 'react'
import styled from 'react-emotion'
import posed, { PoseGroup } from 'react-pose'

const BlockOne = styled(
  posed.div({
    enter: { opacity: 1, delayChildren: 100 },
    exit: { opacity: 0 }
  })
)`
  width: 200px;
  height: 200px;
  background: #ccc;
`

const BlockTwo = styled(
  posed.div({
    enter: { x: 100 },
    exit: { x: 0, delay: 100 }
  })
)`
  width: 10px;
  height: 10px;
  background: red;
`

class Animated extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({ on: !this.state.on })
  }

  render() {
    const { on } = this.state
    return (
      <Fragment>
        <button type="button" onClick={this.toggle}>
          Test {`${on}`}
        </button>
        <PoseGroup>
          {on && (
            <BlockOne key="blockOne">
              <BlockTwo />
            </BlockOne>
          )}
        </PoseGroup>
      </Fragment>
    )
  }
}

export default Animated
