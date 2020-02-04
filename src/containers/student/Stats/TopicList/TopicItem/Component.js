import React from 'react'
import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'

import TopicListGroupItemComponent from 'containers/common/stats/TopicListGroupItem'

export default function TopicItemComponent({
  category,
  id,
  text,
  errors,
  studentId
}) {
  const href = `/${category}/stats/${studentId}/topic/${id}`
  return (
    <LinkContainer to={href}>
      <div>
        <TopicListGroupItemComponent text={text} errors={errors} />
      </div>
    </LinkContainer>
  )
}

TopicItemComponent.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    current: PropTypes.number.isRequired,
    week: PropTypes.number.isRequired,
    week3: PropTypes.number.isRequired
  }),
  studentId: PropTypes.string.isRequired
}
