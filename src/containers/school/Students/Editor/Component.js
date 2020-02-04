import React from 'react'
import PropTypes from 'prop-types'

import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Button,
  FormGroup,
  Label,
  Col
} from 'reactstrap'
import { FormControl } from 'components/common/ff-controls'
import { t } from 'i18n'

export default function StudentEditor({ hideEditor, handleSubmit, invalid }) {
  return (
    <Form onSubmit={handleSubmit}>
      <ModalHeader toggle={hideEditor}>
        {t('student.editor.header')}
      </ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Label for="name" sm={6}>
            {t('student.editor.label.name')}
          </Label>
          <Col sm={6}>
            <FormControl name="name" id="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="surname" sm={6}>
            {t('student.editor.label.surname')}
          </Label>
          <Col sm={6}>
            <FormControl name="surname" id="surname" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="login" sm={6}>
            {t('student.editor.label.login')}
          </Label>
          <Col sm={6}>
            <FormControl name="login" id="login" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={6}>
            {t('student.editor.label.email')}
          </Label>
          <Col sm={6}>
            <FormControl name="email" id="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="passwd" sm={6}>
            {t('student.editor.label.passwd')}
          </Label>
          <Col sm={6}>
            <FormControl name="passwd" id="passwd" type="password" />
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          className="ml-auto"
          type="submit"
          disabled={invalid}
        >
          {t('button.create')}
        </Button>
        <Button color="secondary" className="ml-1" onClick={hideEditor}>
          {t('button.cancel')}
        </Button>
      </ModalFooter>
    </Form>
  )
}

StudentEditor.propTypes = {
  hideEditor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
}
