import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Card, CardText } from 'reactstrap'
import { QuestionsLargeScreen } from './index'
const LargeQuestionsCard = ({ questionsList, Render, loaded }) => {
  const status = true

  const cRender = () => {
    Render(status)
  }

  const [selector, setSelector] = useState(1)
  const [warning, setWarning] = useState('')

  const handleNext = () => {
    selector === 40 ? setWarning('stop here') : setSelector(selector + 1)
  }

  const handlePrev = () => {
    selector === 1 ? setWarning('stop here') : setSelector(selector - 1)
  }

  return (
    <Card>
      <Row>
        <Col xs="2">
          {' '}
          <CardText
            style={{ textTransform: 'Uppercase' }}
            onClick={() => cRender()}
          >
            Close large
          </CardText>
        </Col>
        <Col xs="10"></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col xs="12">
          <QuestionsLargeScreen
            questionsList={questionsList}
            handleNext={handleNext}
            handlePrev={handlePrev}
            warning={warning}
            selector={selector}
            loaded={loaded}
          />
        </Col>{' '}
      </Row>
    </Card>
  )
}

LargeQuestionsCard.propTypes = {
  Render: PropTypes.func,
  questionsList: PropTypes.array,
  loaded: PropTypes.bool
}

export default LargeQuestionsCard
