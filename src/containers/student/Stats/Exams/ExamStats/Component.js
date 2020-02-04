import React from 'react'
import PropTypes from 'prop-types'

import ExamStatItem from './ExamStatItem'

import { ListGroup } from 'reactstrap'

export default function ExamStatsComponent({ questions }) {
  return (
    <ListGroup>
      {questions.map(question => (
        <ExamStatItem key={question.id} {...question} />
      ))}
    </ListGroup>
  )
}
ExamStatsComponent.propTypes = {
  questions: PropTypes.array.isRequired
}
