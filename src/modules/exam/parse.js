import { EXAM_DURATION } from 'modules/category/constants'
import { parseISOUTCDateString } from 'utils/parse'
import { EXAM_STATUS_IN_PROGRESS, EXAM_STATUS_EXPIRED } from './constants'

function isExamExpired(category, startDate) {
  const duration = EXAM_DURATION[category]
  return Date.now() > startDate.getTime() + duration
}

export function parseExam(category, data) {
  const { start, end, status } = data
  const startDate = start ? parseISOUTCDateString(start) : null
  const endDate = end && end !== 'None' ? parseISOUTCDateString(end) : null
  /* <TEMPORARY FIX FOR BACKEND ISSUE> */
  const finalStatus =
    status === EXAM_STATUS_IN_PROGRESS
      ? isExamExpired(category, startDate)
        ? EXAM_STATUS_EXPIRED
        : EXAM_STATUS_IN_PROGRESS
      : status
  /* </TEMPORARY FIX FOR BACKEND ISSUE> */
  return {
    ...data,
    startDate,
    endDate,
    status: finalStatus
  }
}
