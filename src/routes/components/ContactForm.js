import React, { Component } from 'react'
import {
  styled,
  typography,
  color,
  background,
  padding,
  marginTop,
  marginBottom
} from 'styles/cssFor'
import Input from 'components/Input'
import Button from 'components/Button'

const Container = styled.div`
  ${background('offWhite')};
  ${color('mdGrey')};
  ${marginTop('xl')};
  ${marginBottom('xl')};
  ${padding('xl')};
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
          <Input
            onChange={e => this.setState({ email: e.target.value })}
            value={email}
            name="email"
            placeholder="Email to get back to you"
          />
          <Input
            onChange={e => this.setState({ message: e.target.value })}
            value={message}
            name="message"
            placeholder="Type some things..."
          />
          <SubmitButton block type="submit" disabled={!(email && message)}>
            Submit
          </SubmitButton>
        </form>
      </Container>
    )
  }
}

export default ContactForm
