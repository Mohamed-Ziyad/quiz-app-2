import { createSelector } from 'reselect'
import { t } from 'i18n'

import { allExamStats } from 'modules/stats/selectors/student'
import { period } from 'modules/stats/selectors/common'
import {
  PERIOD_CURRENT,
  PERIOD_WEEK,
  PERIOD_WEEK3,
  PERIOD_ALL
} from 'modules/stats/constants'
import { EXAM_STATUS_PASSED, EXAM_STATUS_FAILED } from 'modules/exam/constants'
import { examQuestionCount } from 'modules/category/selectors'

const examsByPeriod = createSelector(
  allExamStats,
  period,
  (allExamStats, period) => {
    if (!allExamStats) {
      return []
    }
    const { current, week, week3 } = allExamStats
    switch (period) {
      case PERIOD_CURRENT:
        return current
      case PERIOD_WEEK:
        return week
      case PERIOD_WEEK3:
        return week3
      case PERIOD_ALL:
        return week3.concat(week, current)
      default:
    }
  }
)

const byStart = (a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : 0)

export const chartData = createSelector(
  examsByPeriod,
  examQuestionCount,
  (exams, questionCount) =>
    exams.sort(byStart).reduce((result, exam, index) => {
      if (
        exam.status === EXAM_STATUS_PASSED ||
        exam.status === EXAM_STATUS_FAILED
      ) {
        result.push({
          attempt: t('statistics.summaryChart.attempt', { attempt: index + 1 }),
          start: exam.start,
          validAnswers: questionCount - exam.errors
        })
      }
      return result
    }, [])
)
