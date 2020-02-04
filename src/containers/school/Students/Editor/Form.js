import React from 'react'

import Component from './Component'
import { Form as FinalForm } from 'react-final-form'
import validate from './validate'

export default function FormComponent(props) {
  return <FinalForm component={Component} validate={validate} {...props} />
}
