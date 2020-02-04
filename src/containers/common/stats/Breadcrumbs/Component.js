import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'reactstrap'
import BreadcrumbRouterItem from 'components/breadcrumb/RouterItem'
import { t } from 'i18n'
import { USER_TYPE_SCHOOL } from 'modules/auth/constants'

export default function StatsBreadcrumbsComponent({
  topic,
  exam,
  user,
  student
}) {
  return (
    <Breadcrumb>
      <BreadcrumbRouterItem path="/:category/stats/:studentId" activeExact>
        {user && user.type === USER_TYPE_SCHOOL && student
          ? `${student.name} ${student.surname}`
          : t('breadcrumbs.statistics')}
      </BreadcrumbRouterItem>
      <BreadcrumbRouterItem path="/:category/stats/:studentId/topic/:id" exact>
        {topic ? topic.text : '...'}
      </BreadcrumbRouterItem>
      <BreadcrumbRouterItem path="/:category/stats/:studentId/exams">
        {t('breadcrumbs.exams')}
      </BreadcrumbRouterItem>
      <BreadcrumbRouterItem path="/:category/stats/:studentId/exams/:id" exact>
        {exam ? exam.id : '...'}
      </BreadcrumbRouterItem>
    </Breadcrumb>
  )
}

StatsBreadcrumbsComponent.propTypes = {
  topic: PropTypes.object,
  exam: PropTypes.object,
  user: PropTypes.object,
  student: PropTypes.object
}
