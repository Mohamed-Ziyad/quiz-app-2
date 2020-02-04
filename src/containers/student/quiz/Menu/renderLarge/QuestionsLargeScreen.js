import React from 'react'
import PropTypes from 'prop-types'

import { Col, Row, Spinner, CardBody } from 'reactstrap'
import { Question, QuestionNoImg, QuestionNoImgSmall } from './index'

function QuestionsLargeScreen({
  questionsList,
  handleNext,
  handlePrev,
  warning,
  selector,
  loaded
}) {
  return loaded === false ? (
    <Row>
      <Col xs="5"></Col>
      <Col xs="2">
        <Spinner
          style={{ width: '3rem', height: '3rem' }}
          type="grow"
          color="black"
        />
      </Col>
      <br />
      <br />
      <br />
      <br />

      <Col xs="5"></Col>
    </Row>
  ) : (
    <CardBody style={{ overflow: 'hidden' }}>
      <Row style={{ opacity: '0.2' }}>
        {questionsList
          .filter(question => question.id === selector - 2)
          .map(question => (
            <QuestionNoImgSmall
              key={question.id}
              id={question.id}
              questionText={question.text}
            />
          ))}
      </Row>
      <Row style={{ marginTop: '-30px', opacity: '0.5' }}>
        {questionsList
          .filter(question => question.id === selector - 1)
          .map(question => (
            <QuestionNoImg
              key={question.id}
              id={question.id}
              questionText={question.text}
            />
          ))}
      </Row>
      <Row style={{ marginTop: '0' }}>
        <Question
          questionsList={questionsList}
          handleNext={handleNext}
          handlePrev={handlePrev}
          selector={selector}
          warning={warning}
        />
      </Row>
      <Row style={{ marginTop: '0px', opacity: '0.5' }}>
        {questionsList
          .filter(question => question.id === selector + 1)
          .map(question => (
            <QuestionNoImg
              key={question.id}
              id={question.id}
              questionText={question.text}
            />
          ))}
      </Row>
      <Row style={{ marginTop: '-30px', opacity: '0.2' }}>
        {questionsList
          .filter(question => question.id === selector + 2)
          .map(question => (
            <QuestionNoImgSmall
              key={question.id}
              id={question.id}
              questionText={question.text}
            />
          ))}
      </Row>
      <Row>{warning}</Row>
    </CardBody>
  )
}

QuestionsLargeScreen.propTypes = {
  questionsList: PropTypes.array,
  id: PropTypes.number,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  warning: PropTypes.string,
  selector: PropTypes.number,
  loaded: PropTypes.bool
}

export default QuestionsLargeScreen
