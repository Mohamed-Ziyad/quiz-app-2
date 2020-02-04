import { createActionWithPayloadCreator } from 'utils/actionCreators'
import { SELECT_CATEGORY } from './constants'

export const selectCategory = createActionWithPayloadCreator(SELECT_CATEGORY)
