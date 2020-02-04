import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StatusIcon from 'components/exam/StatusIcon'
import ExamStats from '../ExamStats'

import { t } from 'i18n'
import { datetimeIT } from 'utils/format'

export default class ExamSingleStats extends Component {
  static propTypes = {
    exam: PropTypes.object,
    examQuestionCount: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired,
    fetchExamSingleIfNecessary: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired
  }
  componentDidMount() {
    const {
      select,
      fetchExamSingleIfNecessary,
      match: {
        params: { id }
      }
    } = this.props
    fetchExamSingleIfNecessary(+id)
    select(+id)
  }
  render() {
    const { exam, examQuestionCount } = this.props
    if (!exam) {
      return null
    }
    const { id, errors, status, start } = exam
    return (
      <div>
        <div>
          <span title={t(`exam.status.${status}`)}>
            <StatusIcon status={status} />
          </span>
          <span className="ml-1">
            {datetimeIT(start)} ID: {id} ({errors} / {examQuestionCount})
          </span>
        </div>
        <ExamStats id={id} />
      </div>
    )
  }
}
