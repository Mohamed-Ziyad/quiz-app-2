import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, CardBody, Button, CardImg, CardText } from 'reactstrap'
import noImg from '../img/LargeNoImg.png'
const Question = ({ questionsList, selector, handlePrev, handleNext }) => {
  const Question = () =>
    questionsList
      .filter(question => question.id === selector)
      .map(question => (
        <CardBody key={question.id}>
          <Row>
            <Col md="2" style={{ padding: '3px' }}>
              {question.image ? (
                <CardImg
                  style={{
                    marginTop: '-30px',
                    position: 'absolute',
                    height: '150px',
                    width: '150px'
                  }}
                  src={`/img/${question.image}.jpg`}
                ></CardImg>
              ) : (
                <CardImg
                  style={{
                    marginTop: '-30px',
                    position: 'absolute',
                    height: '150px',
                    width: '150px'
                  }}
                  src={noImg}
                ></CardImg>
              )}
            </Col>
            <Col md="7" style={{ marginLeft: '3px' }}>
              <CardText
                style={{
                  padding: '25px',
                  background: '#e9ecef',
                  height: '100px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {question.id} | {question.text}
              </CardText>
            </Col>
            <Col md="2" style={{ marginLeft: '-20px' }}>
              <CardBody
                width="auto"
                className="text-center"
                style={{ padding: '0', background: '#e9ecef', height: '100px' }}
              >
                <Button
                  className="fa fa-check-circle"
                  style={{
                    fontSize: '30px',
                    marginTop: '20px'
                  }}
                ></Button>

                <Button
                  className="fa fa-times-circle"
                  style={{
                    fontSize: '30px',
                    marginTop: '20px'
                  }}
                ></Button>
              </CardBody>
            </Col>
            <Col md="1" style={{ marginLeft: '-40px' }}>
              <CardBody
                className="text-center"
                style={{
                  marginTop: '-20px',
                  height: '100px'
                }}
              >
                {' '}
                <Button
                  className="fa fa-chevron-up"
                  style={{
                    fontSize: '24px'
                  }}
                  onClick={handleNext}
                ></Button>
                <Button
                  className="fa fa-chevron-down"
                  style={{
                    fontSize: '24px'
                  }}
                  onClick={handlePrev}
                ></Button>
              </CardBody>
            </Col>
          </Row>
        </CardBody>
      ))

  return <Question />
}

Question.propTypes = {
  questionsList: PropTypes.array,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  selector: PropTypes.number,
  warning: PropTypes.string
}

export default Question
