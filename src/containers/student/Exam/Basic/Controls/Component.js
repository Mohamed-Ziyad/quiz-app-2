import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Countdown from 'components/Countdown'

import { Row, Col } from 'reactstrap'

import imgSummary from './images/summary.jpg'
import imgPrev from './images/prev.png'
import imgNext from './images/next.png'

export default function ControlsComponent({
  user,
  exam,
  examDuration,
  examQuestionCount,
  selectQuestion,
  selectedQuestionIndex,
  setModeSummary
}) {
  const { id, startDate } = exam
  const { name, surname } = user
  const expireDate = new Date(startDate.getTime() + examDuration)
  const prevDisabled = selectedQuestionIndex === 0
  const nextDisabled = selectedQuestionIndex === examQuestionCount - 1
  return (
    <Row className="mt-3 justify-content-between">
      <Col xs="auto">
        <div className="border border-success d-flex h-100 justify-content-center align-items-center">
          <div className="countdown-container px-3">
            <Countdown date={expireDate} />
          </div>
        </div>
      </Col>
      <Col className="d-none d-md-block">
        <div className="field-label">Scheda Esame N.</div>
        <div className="field-value text-center bg-white border border-success">
          {id}
        </div>
        <div className="field-label">Cognome e Nome del Candidato</div>
        <div className="field-value text-center bg-white border border-success">
          {name} {surname}
        </div>
      </Col>
      <Col xs="auto" className="d-flex justify-content-around">
        <div className="c-pointer mx-1 text-center">
          <div className="control-label">Riepilogo Scheda</div>
          <img src={imgSummary} alt="summary" onClick={setModeSummary} />
        </div>
        <div
          className={cn('c-pointer question-navigation-item mx-1 text-center', {
            'c-not-allowed': prevDisabled
          })}
          onClick={() =>
            !prevDisabled && selectQuestion(selectedQuestionIndex - 1)
          }
        >
          <div className="control-label">Domanda Precedente</div>
          <img src={imgPrev} alt="prev" />
        </div>
        <div
          className={cn('c-pointer question-navigation-item mx-1 text-center', {
            'c-not-allowed': nextDisabled
          })}
          onClick={() =>
            !nextDisabled && selectQuestion(selectedQuestionIndex + 1)
          }
        >
          <div className="control-label">Domanda Successiva</div>
          <img src={imgNext} alt="next" />
        </div>
      </Col>
    </Row>
  )
}

ControlsComponent.propTypes = {
  user: PropTypes.object.isRequired,
  exam: PropTypes.object.isRequired,
  examDuration: PropTypes.number.isRequired,
  examQuestionCount: PropTypes.number.isRequired,
  selectedQuestionIndex: PropTypes.number.isRequired,
  selectQuestion: PropTypes.func.isRequired,
  setModeSummary: PropTypes.func.isRequired
}
