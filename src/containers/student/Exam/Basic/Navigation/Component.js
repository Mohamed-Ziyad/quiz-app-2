import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { getZeroArray } from 'utils/array'

function group10Answered(answers, group10) {
  const startIndex = group10 * 10
  const endIndex = group10 * 10 + 9
  for (let i = startIndex; i <= endIndex; i++) {
    if (answers[i] === undefined) {
      return false
    }
  }
  return true
}

export default class QuestionNavigationComponent extends PureComponent {
  static propTypes = {
    examQuestionCount: PropTypes.number,
    selectedQuestionIndex: PropTypes.number.isRequired,
    selectQuestion: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired
  }
  render() {
    const {
      examQuestionCount,
      selectedQuestionIndex,
      selectQuestion,
      answers
    } = this.props
    const group10Count = Math.ceil(examQuestionCount / 10)
    const selectedGroup10 = Math.floor(selectedQuestionIndex / 10)
    const selectedOneToTen = selectedQuestionIndex % 10
    return (
      <Fragment>
        <div className="exam-question-menu-group-10-container d-none d-md-flex mt-1">
          {getZeroArray(group10Count).map((zero, index) => (
            <div
              key={index}
              className={cn(
                'question-item c-pointer text-center p-1 border border-success flex-grow-1',
                {
                  active: index === selectedGroup10,
                  answered: group10Answered(answers, index)
                }
              )}
              onClick={() => selectQuestion(index * 10)}
            >
              {index * 10 + 1} - {index * 10 + 10}
            </div>
          ))}
        </div>
        <div className="exam-question-menu-10items-container d-none d-md-flex mt-1">
          {getZeroArray(10).map((zero, index) => (
            <div
              key={index}
              className={cn(
                'question-item c-pointer text-center p-1 border border-success flex-grow-1',
                { active: index === selectedOneToTen }
              )}
              onClick={() =>
                selectQuestion(
                  (selectedGroup10 === -1 ? 0 : selectedGroup10) * 10 + index
                )
              }
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="exam-question-menu-question-items-container d-none d-md-flex mt-1 flex-wrap">
          {getZeroArray(examQuestionCount).map((z, index) => (
            <Fragment key={index}>
              <div
                className={cn(
                  'question-item single-question c-pointer text-center p-1 border border-success flex-grow-1',
                  {
                    active: index === selectedQuestionIndex,
                    answered: answers[index] !== undefined
                  }
                )}
                onClick={() => selectQuestion(index)}
              >
                {index + 1}
              </div>
              {index % 10 === 9 ? (
                <div className="d-md-block d-lg-none w-100" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </Fragment>
    )
  }
}
