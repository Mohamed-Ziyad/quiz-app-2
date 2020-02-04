import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHourglassEnd,
  faHourglassHalf,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'

import {
  EXAM_STATUS_EXPIRED,
  EXAM_STATUS_PASSED,
  EXAM_STATUS_FAILED,
  EXAM_STATUS_IN_PROGRESS
} from 'modules/exam/constants'

const STATUS_ICON = {
  [EXAM_STATUS_EXPIRED]: faHourglassEnd,
  [EXAM_STATUS_FAILED]: faTimesCircle,
  [EXAM_STATUS_PASSED]: faCheckCircle,
  [EXAM_STATUS_IN_PROGRESS]: faHourglassHalf
}

const STATUS_COLOR = {
  [EXAM_STATUS_EXPIRED]: 'var(--red)',
  [EXAM_STATUS_FAILED]: 'var(--red)',
  [EXAM_STATUS_PASSED]: 'var(--green)'
}

export default function StatusIconComponent({ status }) {
  return (
    <FontAwesomeIcon
      icon={STATUS_ICON[status]}
      color={STATUS_COLOR[status]}
      spin={status === EXAM_STATUS_IN_PROGRESS}
      fixedWidth
    />
  )
}

StatusIconComponent.propTypes = {
  status: PropTypes.string.isRequired
}
