import { compose } from 'redux'
import { connect } from 'react-redux'
import { wrapModalEditor } from 'decorators/modalEditor'

import Form from './Form'

import {
  createAndReload,
  editorClose as closeEditor
} from 'modules/student/actions'
import { CREATE_SUCCESS } from 'modules/student/constants'
import { editorOpen } from 'modules/student/selectors'

function onSubmit(values) {
  return async dispatch => {
    const { name, surname, login, email, passwd } = values
    const data = {
      name,
      surname,
      login,
      email: email || '',
      passwd
    }
    const resultAction = await dispatch(createAndReload(data))
    if (resultAction.type === CREATE_SUCCESS) {
      dispatch(closeEditor())
    }
  }
}

export default compose(
  connect(
    state => ({ active: editorOpen(state) }),
    { onSubmit, closeEditor }
  ),
  wrapModalEditor()
)(Form)
