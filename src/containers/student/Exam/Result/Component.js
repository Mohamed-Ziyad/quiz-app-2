import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { t } from 'i18n'

export default function ResultComponent({
  category,
  selectedId,
  invalidAnswersCount
}) {
  return (
    <div>
      <div>
        {t('exam.invalidAnswersCount')} {invalidAnswersCount}
      </div>
      <LinkContainer to={`/${category}/stats/exams/${selectedId}`}>
        <Button color="warning">{t('exam.goToExamStatistics')}</Button>
      </LinkContainer>
    </div>
  )
}

ResultComponent.propTypes = {
  invalidAnswersCount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired
}
