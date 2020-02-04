import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { t } from 'i18n'

import { Table, Button } from 'reactstrap'

export default function SummaryComponent({
  exam,
  user,
  answers,
  setModeBasic,
  finishSelectedExamAndContinue
}) {
  const { questions } = exam
  return (
    <div className="exam-summary-container bg-custom-pink pb-2 flex-grow-1">
      <div className="question-table-container">
        <Table size="sm" bordered>
          <tbody>
            {questions.map((question, index) => (
              <Fragment key={question.id}>
                <tr>
                  <td className="font-weight-bold">{index + 1}</td>
                  <td className="font-weight-bold">Testo della domanda</td>
                  <td className="text-center text-muted bg-white">V</td>
                  <td className="text-center text-muted bg-white">F</td>
                </tr>
                <tr>
                  <td className="image-container align-middle text-center">
                    {question.image ? (
                      <img
                        src={`/img/${question.image}.jpg`}
                        alt={question.image}
                        className="img-fluid"
                      />
                    ) : null}
                  </td>
                  <td className="align-middle bg-white">{question.text}</td>
                  <td className="align-middle bg-white">
                    {answers[index] === 1 ? 'X' : null}
                  </td>
                  <td className="align-middle bg-white">
                    {answers[index] === 0 ? 'X' : null}
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-2 d-flex justify-content-center">
        <div className="w-50 d-flex justify-content-around">
          <Button color="secondary" onClick={setModeBasic}>
            {t('exam.backToQuestions')}
          </Button>
          <Button
            color={questions.length === answers.length ? 'primary' : 'danger'}
            className="ml-1"
            onClick={finishSelectedExamAndContinue}
          >
            {t('exam.finishExam')}
          </Button>
        </div>
      </div>
      <div className="mt-1 d-flex justify-content-center">
        <div className="w-50">
          <div className="field-label">Scheda Esame N.</div>
          <div className="field-value text-center bg-white border border-success">
            {exam.id}
          </div>
          <div className="field-label">Cognome e Nome del Candidato</div>
          <div className="field-value text-center bg-white border border-success">
            {user.name} {user.surname}
          </div>
        </div>
      </div>
    </div>
  )
}

SummaryComponent.propTypes = {
  exam: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  setModeBasic: PropTypes.func.isRequired,
  finishSelectedExamAndContinue: PropTypes.func.isRequired
}
