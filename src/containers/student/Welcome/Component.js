import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col } from 'reactstrap'

import menuExam from './images/menu-exam.png'
import menuQuizMult from './images/menu-quiz-mult.png'
import menuQuiz from './images/menu-quiz.png'
// import menuReview from './images/menu-review.png'

export default function WelcomeComponent({ category }) {
  return (
    <Fragment>
      <Row className="welcome-container">
        <Col sm={4} className="button-image-container">
          <LinkContainer to={`/${category}/quiz/menu/single`}>
            <img
              src={menuQuiz}
              alt="Choose single topic"
              className="button-image mx-auto d-block"
            />
          </LinkContainer>
        </Col>
        <Col sm={4} className="button-image-container">
          <LinkContainer to={`/${category}/quiz/menu/multiple`}>
            <img
              src={menuQuizMult}
              alt="Choose multiple topics"
              className="button-image mx-auto d-block"
            />
          </LinkContainer>
        </Col>
        <Col sm={4} className="button-image-container">
          <LinkContainer to={`/${category}/exam`}>
            <img
              src={menuExam}
              alt="Begin exam!"
              className="button-image mx-auto d-block"
            />
          </LinkContainer>
        </Col>
      </Row>
    </Fragment>
  )
}

WelcomeComponent.propTypes = {
  category: PropTypes.string
}
