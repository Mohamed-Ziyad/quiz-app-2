import { createSelector } from 'reselect'

import { period } from './common'

import {
  PERIOD_ALL,
  PERIOD_CURRENT,
  PERIOD_WEEK,
  PERIOD_WEEK3
} from '../constants'

import { selectedId as topicId } from 'modules/topic/selectors'
import { selectedId as examId } from 'modules/exam/selectors'

const studentStats = state => state.stats.studentStats
export const allExamStats = state => state.stats.allExamStats

export const student = createSelector(
  studentStats,
  studentStats => (studentStats ? studentStats.student : null)
)

export const topics = createSelector(
  studentStats,
  studentStats => (studentStats ? studentStats.topics : [])
)

export const topic = createSelector(
  topics,
  topicId,
  (topics, topicId) => topics.find(topic => topic.id === topicId) || null
)

export const allExams = createSelector(
  allExamStats,
  stats => (stats ? [...stats.current, ...stats.week, ...stats.week3] : [])
)
export const exam = createSelector(
  allExams,
  examId,
  (exams, examId) => exams.find(exam => exam.id === examId) || null
)

export const examsForCurrentPeriod = createSelector(
  allExamStats,
  allExams,
  period,
  (allExamStats, allExams, period) => {
    switch (period) {
      case PERIOD_ALL:
        return allExams
      case PERIOD_CURRENT:
      case PERIOD_WEEK:
      case PERIOD_WEEK3:
        return allExamStats ? allExamStats[period] : []
      default:
        return []
    }
  }
)

const compareExamByStartedAsc = (examA, examB) =>
  examA.start < examB.start ? -1 : examA.start > examB.start ? 1 : 0

export const examsForCurrentPeriodOrdered = createSelector(
  examsForCurrentPeriod,
  exams => exams.slice(0).sort(compareExamByStartedAsc)
)
