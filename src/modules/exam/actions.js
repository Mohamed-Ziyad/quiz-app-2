import { CALL_API } from 'constants/api'
import { API_URL } from 'constants/endpoints'
import {
  createActionCreator,
  createActionWithPayloadCreator
} from 'utils/actionCreators'
import {
  selectedItem,
  byId,
  answers as answersSelector,
  selectedQuestionIndex
} from './selectors'
import { fetchAllExamStats } from 'modules/stats/actions'
import { allExamStats } from 'modules/stats/selectors/student'
import {
  current as currentCategory,
  examQuestionCount
} from 'modules/category/selectors'
import { user as userSelector } from 'modules/auth/selectors'

import {
  SELECT_EXAM,
  FETCH_SINGLE_BY_ID,
  FETCH_SINGLE_BY_ID_SUCCESS,
  FETCH_SINGLE_BY_ID_FAILURE,
  START_NEW,
  START_NEW_SUCCESS,
  START_NEW_FAILURE,
  FINISH,
  FINISH_SUCCESS,
  FINISH_FAILURE,
  EXAM_STATUS_IN_PROGRESS,
  SELECT_QUESTION,
  ANSWER_QUESTION,
  MODE_BASIC,
  MODE_SUMMARY,
  MODE_RESULT,
  SET_MODE,
  TOGGLE_EXPLANATION
} from './constants'
import { FETCH_ALL_EXAM_STATS_SUCCESS } from 'modules/stats/constants'

export const select = createActionWithPayloadCreator(SELECT_EXAM)
export const selectQuestion = createActionWithPayloadCreator(SELECT_QUESTION)
const answerQuestion = createActionWithPayloadCreator(ANSWER_QUESTION)

const setMode = createActionWithPayloadCreator(SET_MODE)
export const setModeSummary = () => setMode(MODE_SUMMARY)
export const setModeBasic = () => setMode(MODE_BASIC)
export const setModeResult = () => setMode(MODE_RESULT)

export const toggleExplanation = createActionCreator(TOGGLE_EXPLANATION)

function fetchExamSingle(category, examId) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/exam/${examId}`,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_SINGLE_BY_ID,
        FETCH_SINGLE_BY_ID_SUCCESS,
        FETCH_SINGLE_BY_ID_FAILURE
      ]
    },
    category,
    examId
  }
}

export function fetchExamSingleIfNecessary(examId) {
  return (dispatch, getState) => {
    const state = getState()
    const category = currentCategory(state)
    const existEntity = byId(state, examId)
    if (!existEntity) {
      dispatch(fetchExamSingle(category, examId))
    }
  }
}

export function startNewExam(category) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/exam`,
      method: 'GET',
      credentials: 'include',
      types: [START_NEW, START_NEW_SUCCESS, START_NEW_FAILURE]
    },
    category
  }
}

export function continueOrStartNewExam() {
  return async (dispatch, getState) => {
    const state = getState()
    const category = currentCategory(state)
    const user = userSelector(state)
    const userId = user ? user.id : null
    const examStatsAction = await dispatch(fetchAllExamStats(userId))
    if (examStatsAction.type === FETCH_ALL_EXAM_STATS_SUCCESS) {
      const examStats = allExamStats(getState())
      const examInProgress = examStats.current.find(
        exam => exam.status === EXAM_STATUS_IN_PROGRESS
      )
      let examId
      if (examInProgress) {
        examId = examInProgress.id
      } else {
        const newExamAction = await dispatch(startNewExam(category))
        // response exam schema GET /v1/exam slightly different with compare to GET /v1/exam/:id
        // so we will additional fetch new created exam
        if (newExamAction.type === START_NEW_SUCCESS) {
          examId = newExamAction.response.exam.id
        }
      }
      if (examId) {
        await dispatch(fetchExamSingle(category, examId))
        dispatch(select(examId))
      }
    }
  }
}

function finishExam(examId, data) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/exam/${examId}`,
      method: 'POST',
      credentials: 'include',
      data,
      types: [FINISH, FINISH_SUCCESS, FINISH_FAILURE]
    }
  }
}

const invertAnswer = answer => (answer === 1 ? 0 : 1)
export function finishSelectedExamAndContinue() {
  return async (dispatch, getState) => {
    const state = getState()
    const exam = selectedItem(state)
    const { id, questions } = exam
    const answers = answersSelector(state)
    const category = currentCategory(state)
    const data = {
      questions: questions.map(item => item.id),
      answers: questions.map((question, index) => {
        const answer = answers[index]
        // if question was not answered - submit like wrong answer
        return answer !== undefined ? answer : invertAnswer(question.answer)
      })
    }
    await dispatch(finishExam(id, data))
    await dispatch(fetchExamSingle(category, id))
    dispatch(setModeResult())
  }
}

function getFirstNotAnsweredIndex(answers, startIndex, questionCount) {
  for (let i = startIndex; i < questionCount; i++) {
    if (answers[i] === undefined) {
      return i
    }
  }
  return -1
}

export function answerSelectedQuestionAndContinue(answer) {
  return (dispatch, getState) => {
    const state = getState()
    const questionIndex = selectedQuestionIndex(state)
    const questionCount = examQuestionCount(state)
    dispatch(answerQuestion({ questionIndex, answer }))
    const answers = answersSelector(getState())
    const firstNotAnsweredQuestionIndex = getFirstNotAnsweredIndex(
      answers,
      0,
      questionCount
    )
    if (firstNotAnsweredQuestionIndex !== -1) {
      if (questionIndex < questionCount - 1) {
        let nextQuestionIndex = getFirstNotAnsweredIndex(
          answers,
          questionIndex + 1,
          questionCount
        )
        if (nextQuestionIndex === -1) {
          nextQuestionIndex = firstNotAnsweredQuestionIndex
        }
        dispatch(selectQuestion(nextQuestionIndex))
      } else {
        dispatch(selectQuestion(firstNotAnsweredQuestionIndex))
      }
    } else {
      dispatch(setModeSummary())
    }
  }
}
