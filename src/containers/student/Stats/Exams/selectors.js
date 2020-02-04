import { createSelector } from 'reselect'
import { examsForCurrentPeriodOrdered } from 'modules/stats/selectors/student'

export const exams = createSelector(
  examsForCurrentPeriodOrdered,
  exams => exams.filter(exam => exam.errors > 0)
)
