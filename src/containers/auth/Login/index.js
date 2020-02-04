import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from 'modules/auth/actions'
import Component from './Component'

import { isAuthenticating, error } from 'modules/auth/selectors'

import { Form } from 'react-final-form'

function LoginForm({ login, ...props }) {
  return <Form onSubmit={login} component={Component} {...props} />
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(
  state => ({
    isAuthenticating: isAuthenticating(state),
    authError: error(state)
  }),
  { login }
)(LoginForm)
