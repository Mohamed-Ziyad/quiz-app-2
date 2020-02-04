import React from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem } from 'reactstrap'

import ErrorsChart from './ErrorsChart'

export default function TopicListGroupItemComponent({ text, errors }) {
  return (
    <ListGroupItem className="custom-list-group-item text-decoration-none d-flex align-items-center">
      <div className="topic-errors-chart-container">
        <ErrorsChart errors={errors} />
      </div>
      <div className="ml-3">{text}</div>
    </ListGroupItem>
  )
}

TopicListGroupItemComponent.propTypes = {
  text: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    current: PropTypes.number.isRequired,
    week: PropTypes.number.isRequired,
    week3: PropTypes.number.isRequired
  })
}
