import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Alert,
  Spinner
} from 'reactstrap'
import { FormControl } from 'components/common/ff-controls'

export default function LoginFormComponent({
  handleSubmit,
  isAuthenticating,
  authError
}) {
  return (
    <Card className="shadow w-50 mx-auto mt-5">
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={isAuthenticating}>
            <CardTitle>
              <h4>Login</h4>
            </CardTitle>
            {authError ? (
              <Alert color="danger">{authError.message}</Alert>
            ) : null}
            <FormGroup>
              <FormControl name="username" required placeholder="Login" />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </FormGroup>
          </fieldset>
          <Button
            type="submit"
            color="primary"
            disabled={isAuthenticating}
            block
          >
            {isAuthenticating ? <Spinner size="sm" className="mr-1" /> : null}
            Log in
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}

LoginFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  authError: PropTypes.object
}
