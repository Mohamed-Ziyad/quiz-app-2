import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem, Button, ButtonGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'

export default class StudentListGroupItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    category: PropTypes.string.isRequired,
    destroy: PropTypes.func.isRequired,
    openEditor: PropTypes.func.isRequired
  }
  edit = e => {
    e.stopPropagation()
    this.props.openEditor(this.props.id)
  }
  destroy = e => {
    e.stopPropagation()
    this.props.destroy(this.props.id)
  }
  render() {
    const { id, name, surname, category } = this.props
    return (
      <LinkContainer to={`/${category}/stats/${id}`}>
        <ListGroupItem className="custom-list-group-item d-flex justify-content-between align-items-center pt-1 pb-1">
          {name} {surname}
          <ButtonGroup>
            <Button
              size="sm"
              color="warning"
              className="mr-1"
              onClick={this.edit}
              disabled
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button size="sm" color="danger" onClick={this.destroy}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </ButtonGroup>
        </ListGroupItem>
      </LinkContainer>
    )
  }
}
