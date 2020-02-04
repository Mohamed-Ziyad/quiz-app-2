import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ListGroupItem, Collapse } from 'reactstrap'
import ExplanationIcon from 'components/ExplanationIcon'

export default function ExamStatItemComponent({
  answer,
  is_correct,
  id,
  text,
  image,
  explanation,
  explanationEnabled,
  toggleExplanation
}) {
  return (
    <ListGroupItem className="exam-stat-item d-flex align-items-center py-1">
      <div className="image-container">
        {image ? (
          <img
            className="img-fluid"
            src={`/img/${image}.jpg`}
            alt={`/img/${image}.jpg`}
          />
        ) : null}
      </div>
      <div className="ml-1 mr-1">
        <strong>{id}</strong>
        <div>{text}</div>
        {explanation ? (
          <Collapse isOpen={explanationEnabled}>
            <small>{explanation}</small>
          </Collapse>
        ) : null}
      </div>
      <div className="ml-auto">
        {explanation ? (
          <ExplanationIcon
            active={explanationEnabled}
            className="explanation-icon"
            onClick={toggleExplanation}
          />
        ) : null}
      </div>
      <div className="ml-1">
        <strong
          className={cn(
            'py-2 px-3 text-white',
            is_correct ? 'bg-success' : 'bg-danger'
          )}
        >
          {answer ? 'V' : 'F'}
        </strong>
      </div>
    </ListGroupItem>
  )
}

ExamStatItemComponent.propTypes = {
  answer: PropTypes.number.isRequired,
  explanation: PropTypes.string,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  is_correct: PropTypes.number.isRequired,
  text: PropTypes.string,
  explanationEnabled: PropTypes.bool.isRequired,
  toggleExplanation: PropTypes.func.isRequired
}
