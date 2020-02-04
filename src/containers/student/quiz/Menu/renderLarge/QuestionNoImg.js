import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, CardBody, Button, CardText } from 'reactstrap'

const QuestionNoImg = ({ id, questionText }) => {
  const QuestionNoImg = () => (
    <CardBody key={id}>
      <Row>
        <Col md="2" style={{ padding: '3px' }}></Col>
        <Col md="7" style={{ marginLeft: '3px' }}>
          <CardText
            style={{
              padding: '15px',
              background: '#e9ecef',
              height: '70px',
              width: '100%'
            }}
          >
            {id} | {questionText}
          </CardText>
        </Col>
        <Col md="2" style={{ marginLeft: '-20px' }}>
          <CardBody
            width="auto"
            className="text-center"
            style={{ padding: '0', background: '#e9ecef', height: '70px' }}
          >
            <Button
              className="fa fa-check-circle"
              style={{
                fontSize: '20px',
                marginTop: '15px'
              }}
            ></Button>

            <Button
              className="fa fa-times-circle"
              style={{
                fontSize: '20px',
                marginTop: '15px'
              }}
            ></Button>
          </CardBody>
        </Col>
        <Col md="1" style={{ marginLeft: '-40px' }}></Col>
      </Row>
    </CardBody>
  )

  return <QuestionNoImg />
}

QuestionNoImg.propTypes = {
  questionText: PropTypes.string,
  id: PropTypes.number
}

export default QuestionNoImg
