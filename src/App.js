import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from 'components/NotFound'
import Login from 'containers/auth/Login'
import Layout from 'containers/Layout'

import 'bootswatch/dist/cosmo/bootstrap.min.css'
import './style/custom.scss'

export default function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" component={Layout} />
      <Route component={NotFound} />
    </Switch>
  )
}
