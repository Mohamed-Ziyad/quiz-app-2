import React from 'react'
import PropTypes from 'prop-types'

import { MODE_BASIC, MODE_SUMMARY, MODE_RESULT } from 'modules/exam/constants'

import Basic from './Basic'
import Summary from './Summary'
import Result from './Result'

export default function ExamComponent({ exam, mode }) {
  if (!exam) {
    return null
  }
  switch (mode) {
    case MODE_BASIC:
      return <Basic />
    case MODE_SUMMARY:
      return <Summary />
    case MODE_RESULT:
      return <Result />
    default:
      return null
  }
}
ExamComponent.propTypes = {
  exam: PropTypes.object,
  mode: PropTypes.string.isRequired
}
