import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { QuestionsSmallScreen } from './index'
import { Row, Col, Card, CardText } from 'reactstrap'

const SmallQuestionsCard = ({ questionsList, Render, loaded }) => {
  const status = true
  const [selector, setSelector] = useState(1)
  const [warning, setWarning] = useState(false)

  const handleNext = () => {
    selector === 40 ? setWarning(true) : setSelector(selector + 1)
  }

  const handlePrev = () => {
    selector === 1 ? setWarning(true) : setSelector(selector - 1)
  }
  useEffect(() => {
    console.log(selector)
  })

  const cRender = () => {
    Render(status)
  }
  return (
    <Card>
      <CardText
        style={{ textTransform: 'Uppercase' }}
        onClick={() => cRender()}
      >
        Close small
      </CardText>
      <Row>
        <Col xs="auto">
          <QuestionsSmallScreen
            questionsList={questionsList}
            handleNext={handleNext}
            handlePrev={handlePrev}
            warning={warning}
            selector={selector}
            loaded={loaded}
          />
        </Col>
      </Row>
    </Card>
  )
}

SmallQuestionsCard.propTypes = {
  questionsList: PropTypes.array,
  Render: PropTypes.func,
  getQuestions: PropTypes.func,
  loaded: PropTypes.bool
}
export default SmallQuestionsCard
