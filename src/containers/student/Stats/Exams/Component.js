import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from 'reactstrap'

import ExamItem from './ExamItem'

export default function ExamsComponent({ exams }) {
  return (
    <ListGroup>
      {exams.map(exam => (
        <ExamItem key={exam.id} {...exam} />
      ))}
    </ListGroup>
  )
}

ExamsComponent.propTypes = {
  exams: PropTypes.array.isRequired
}
