import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Alert, ListGroup, ListGroupItem } from 'reactstrap'

function TopicErrorItem({ id, text, answer }) {
  return (
    <ListGroupItem className="topic-error-item d-flex align-items-center">
      <div>
        <div>
          <strong>{id}</strong>
        </div>
        <div>{text}</div>
      </div>
      <div className="ml-auto">
        <strong>{answer ? 'V' : 'F'}</strong>
      </div>
    </ListGroupItem>
  )
}

TopicErrorItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  answer: PropTypes.number.isRequired
}

export default function QuestionListComponent({ errors, fetching }) {
  return (
    <Fragment>
      {fetching ? (
        <Alert color="info">Please wait</Alert>
      ) : errors.length ? (
        <ListGroup>
          {errors.map(item => (
            <TopicErrorItem key={item.id} {...item} />
          ))}
        </ListGroup>
      ) : (
        <Alert color="info">No errors for selected topic</Alert>
      )}
    </Fragment>
  )
}

QuestionListComponent.propTypes = {
  errors: PropTypes.array.isRequired,
  fetching: PropTypes.bool
}
