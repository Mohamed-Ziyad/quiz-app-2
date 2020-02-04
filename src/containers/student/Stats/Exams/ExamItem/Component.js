import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { t } from 'i18n'
import { datetimeIT } from 'utils/format'

import { ListGroupItem, Card, CardHeader, CardBody, Collapse } from 'reactstrap'
import StatusIcon from 'components/exam/StatusIcon'
import ExamStats from '../ExamStats'

export default class ExamItemComponent extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    errors: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    select: PropTypes.func.isRequired,
    examQuestionCount: PropTypes.number.isRequired,
    fetchExamSingleIfNecessary: PropTypes.func.isRequired
  }
  toggleSelect = () => {
    const { isSelected, id, select, fetchExamSingleIfNecessary } = this.props
    const newId = isSelected ? null : id
    select(newId)
    if (newId) {
      fetchExamSingleIfNecessary(newId)
    }
  }
  render() {
    const {
      isSelected,
      id,
      status,
      start,
      errors,
      examQuestionCount
    } = this.props
    return (
      <ListGroupItem
        className={cn('exam-list-group-item p-0', {
          'bg-primary': isSelected
        })}
      >
        <Card className="border-0">
          <CardHeader className="cursor" onClick={this.toggleSelect}>
            <span title={t(`exam.status.${status}`)}>
              <StatusIcon status={status} />
            </span>
            <span className="ml-1">
              {datetimeIT(start)} ID: {id} ({errors} / {examQuestionCount})
            </span>
          </CardHeader>
          <Collapse isOpen={isSelected}>
            <CardBody className="p-0">
              <ExamStats id={id} />
            </CardBody>
          </Collapse>
        </Card>
      </ListGroupItem>
    )
  }
}
