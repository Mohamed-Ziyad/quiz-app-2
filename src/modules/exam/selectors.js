import { createSelector } from 'reselect'

export const selectedId = state => state.exam.selectedId
const exams = state => state.exam.exams
export const byId = (state, id) => exams(state)[id]

const EMPTY_ARRAY = []
export const questionsById = (state, id) => {
  const item = byId(state, id)
  return item ? item.questions : EMPTY_ARRAY
}
export const answers = state => state.exam.answers
export const mode = state => state.exam.mode

export const explanationEnabled = state => state.exam.explanationEnabled

export const selectedItem = createSelector(
  selectedId,
  exams,
  (examId, examsObj) => examsObj[examId]
)

export const selectedQuestionIndex = state => state.exam.selectedQuestionIndex
export const selectedQuestion = createSelector(
  selectedQuestionIndex,
  selectedItem,
  (selectedQuestionIndex, exam) =>
    exam ? exam.questions[selectedQuestionIndex] : null
)

export const invalidAnswersCount = createSelector(
  selectedItem,
  answers,
  (exam, answers) =>
    exam
      ? exam.questions.filter(
          (question, index) => question.answer !== answers[index]
        ).length
      : 0
)
