import React from 'react'

import Nagivation from './Navigation'
import QuestionLayout from './QuestionLayout'
import Controls from './Controls'

import headerImage from './exam_header.jpg'

export default function BasicLayout() {
  return (
    <div className="exam-container p-2 flex-grow-1 d-flex flex-column">
      <div className="text-center d-none d-md-block">
        <img src={headerImage} alt="" className="mw-100" />
      </div>
      <Nagivation />
      <QuestionLayout />
      <Controls />
    </div>
  )
}
