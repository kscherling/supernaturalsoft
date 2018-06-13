import Container from 'components/Form/shared/Container'
import Label from 'components/Form/shared/Label'
import LabelContainer from 'components/Form/shared/LabelContainer'
import React, { Component } from 'react'
import StyledTextarea from './StyledTextarea'
import { inputStyles } from './shared/styles'

const StyledTextarea = styled.textarea`
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
        <StyledTextarea
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
