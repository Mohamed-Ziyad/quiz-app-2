import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, CardBody, Button, CardText } from 'reactstrap'

const QuestionNoImgSmall = ({ id, questionText }) => {
  const QuestionNoImgSmall = () => (
    <CardBody key={id}>
      <Row>
        <Col md="2" style={{ padding: '3px' }}></Col>
        <Col md="7" style={{ marginLeft: '3px' }}>
          <CardText
            style={{
              padding: '10px',
              background: '#e9ecef',
              height: '45px',
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
            style={{ padding: '0', background: '#e9ecef', height: '45px' }}
          >
            <Button
              className="fa fa-check-circle"
              style={{
                fontSize: '15px',
                marginTop: '5px'
              }}
            ></Button>

            <Button
              className="fa fa-times-circle"
              style={{
                fontSize: '15px',
                marginTop: '5px'
              }}
            ></Button>
          </CardBody>
        </Col>
        <Col md="1" style={{ marginLeft: '-40px' }}></Col>
      </Row>
    </CardBody>
  )
  return <QuestionNoImgSmall />
}

QuestionNoImgSmall.propTypes = {
  questionText: PropTypes.string,
  id: PropTypes.number
}

export default QuestionNoImgSmall
