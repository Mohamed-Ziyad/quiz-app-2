import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Button, ButtonToolbar, ListGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import StudentListGroupItem from './StudentListItem'
import Editor from './Editor'

export default function StudentList({ students, editorCreate }) {
  return (
    <Row>
      <Col xs={12} sm={{ size: 8, offset: 2 }}>
        <Editor />
        <ButtonToolbar className="mb-1 justify-content-end">
          <Button size="sm" color="primary" onClick={editorCreate}>
            <FontAwesomeIcon icon={faPlus} /> Add student
          </Button>
        </ButtonToolbar>
        <ListGroup>
          {students.map(student => (
            <StudentListGroupItem key={student.id} {...student} />
          ))}
        </ListGroup>
      </Col>
    </Row>
  )
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  editorCreate: PropTypes.func.isRequired
}
