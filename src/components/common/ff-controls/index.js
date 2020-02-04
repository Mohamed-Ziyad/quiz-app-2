import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'
import { Field } from 'react-final-form'

function FormControlComponent({ input, meta, ...rest }) {
  const { invalid } = meta
  if (invalid) {
    rest.invalid = true
  }
  return <Input {...input} {...rest} />
}

FormControlComponent.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export function FormControl({ name, ...rest }) {
  return <Field component={FormControlComponent} name={name} {...rest} />
}

FormControl.propTypes = {
  name: PropTypes.string.isRequired
}
