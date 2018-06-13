import React, { Component } from 'react'
import styled from 'react-emotion'
import Container from 'components/Form/_shared/Container'
import Label from 'components/Form/_shared/Label'
import LabelContainer from 'components/Form/_shared/LabelContainer'
import { inputStyles } from 'components/Form/_shared/styles'

const StyledInput = styled.input`
  ${inputStyles};
`

class Input extends Component {
  state = {
    isFilled: Boolean(this.props.defaultValue)
  }

  isControlled = () => this.props.value != null

  isFilled = () =>
    this.isControlled() ? Boolean(this.props.value) : this.state.isFilled

  handleChange = e => this.setState({ isFilled: Boolean(e.target.value) })

  render() {
    const {
      placeholder,
      id,
      onChange,
      required,
      className,
      focusedPlaceholder,
      ...rest
    } = this.props

    return (
      <Container className={className}>
        <StyledInput
          id={id}
          onChange={this.isControlled() ? onChange : this.handleChange}
          required={required}
          placeholder={focusedPlaceholder}
          {...rest}
        />
        <LabelContainer htmlFor={id}>
          <Label filled={this.isFilled()}>{placeholder}</Label>
        </LabelContainer>
      </Container>
    )
  }
}

export default Input
