import React from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function StudentListGroupItem({ category, id, name, surname }) {
  return (
    <LinkContainer to={`/${category}/stats/${id}`}>
      <div>
        <ListGroupItem className="custom-list-group-item d-flex align-items-center">
          {name} {surname}
        </ListGroupItem>
      </div>
    </LinkContainer>
  )
}

StudentListGroupItem.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}
