import { compose } from 'redux'
import { connect } from 'react-redux'
import { wrapSelectCategory } from 'decorators/selectCategory'

import StudentComponent from 'containers/student/CategoryLayout'
import SchoolComponent from 'containers/school/CategoryLayout'

import { selectCategory } from 'modules/category/actions'

const createCategory = compose(
  connect(
    null,
    { selectCategory }
  ),
  wrapSelectCategory()
)

export const Student = createCategory(StudentComponent)
export const School = createCategory(SchoolComponent)
