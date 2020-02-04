import React from 'react'
import PropTypes from 'prop-types'

import imgExplanation from './images/explanation.png'
import imgExplanationActive from './images/explanation_active.png'

export default function ExplanationIcon({ active, ...props }) {
  return (
    <img
      src={active ? imgExplanationActive : imgExplanation}
      alt=""
      {...props}
    />
  )
}

ExplanationIcon.propTypes = {
  active: PropTypes.bool.isRequired
}
