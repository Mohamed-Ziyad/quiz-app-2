import { createSelector } from 'reselect'

import { CATEGORY_B } from './constants'

export const current = state => state.category.current

const QUESTION_COUNT = {
  [CATEGORY_B]: 40
}

const EXAM_DURATION = {
  [CATEGORY_B]: 1000 * 60 * 40
}

export const examQuestionCount = createSelector(
  current,
  currentCategory => QUESTION_COUNT[currentCategory] || 0
)

export const examDuration =
  createSelector(
    current,
    currentCategory => EXAM_DURATION[currentCategory]
  ) || 0
