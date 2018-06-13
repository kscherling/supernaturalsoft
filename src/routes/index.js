import React, { Fragment, Component } from 'react'
import Hero from 'routes/components/Hero'
import Competencies from 'routes/components/Competencies'
import Contact from 'routes/components/Contact'
import Layout from 'routes/components/Layout'
import About from 'routes/components/About'

class IndexRoute extends Component {
  state = {
    showContactForm: false
  }

  toggleContactForm = () => {
    this.setState(({ showContactForm }) => ({
      showContactForm: !showContactForm
    }))
  }
  render() {
    const { showContactForm } = this.state

    return (
      <Layout
        renderHero={() => <Hero />}
        renderContent={() => (
          <Fragment>
            <About toggleContactForm={this.toggleContactForm} />
            <Competencies />
            <Contact
              active={showContactForm}
              onClose={this.toggleContactForm}
            />
          </Fragment>
        )}
      />
    )
  }
}

export default IndexRoute
