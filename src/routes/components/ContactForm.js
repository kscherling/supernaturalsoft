import React, { Component } from 'react'
import { styled, color, marginTop } from 'styles/cssFor'
import Input from 'components/Form/Input'
import Textarea from 'components/Form/Textarea'
import Button from 'components/Button'
import FormGroup from 'components/Form/FormGroup'

const Container = styled.div`
  ${color('mdGrey')};
  ${marginTop('xl')};
  text-align: center;
`

const SubmitButton = styled(Button)`
  ${marginTop('xl')};
`

const encodeForm = body =>
  Object.keys(body)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
    .join('&')

class ContactForm extends Component {
  state = { submitted: false, email: '', message: '' }

  handleSubmit = e => {
    e.preventDefault()
    const { email, message } = this.state

    fetch(process.env.REACT_APP_CONTACT_LAMBDA_URL, {
      method: 'POST',
      body: encodeForm({ email, message }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(() => this.setState({ submitted: true }))
  }

  render() {
    const { submitted, email, message } = this.state

    if (submitted) {
      return (
        <Container>
          <div>
            Thanks for reaching out! We'll be in contact at {email} soon.
          </div>
        </Container>
      )
    }
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
              name="email"
              placeholder="Email to get back to you"
            />
          </FormGroup>
          <FormGroup>
            <Textarea
              rows="6"
              onChange={e => this.setState({ message: e.target.value })}
              value={message}
              name="message"
              placeholder="Type some things..."
            />
          </FormGroup>
          <FormGroup buttons>
            <SubmitButton type="submit" disabled={!(email && message)}>
              Say hello
            </SubmitButton>
          </FormGroup>
        </form>
      </Container>
    )
  }
}

export default ContactForm
