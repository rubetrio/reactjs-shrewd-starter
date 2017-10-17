import React from 'react'
import PageA from './PageA'
import PageA1 from './PageA1'
import PageA2 from './PageA2'
import { Switch,Route } from 'react-router-dom'

export default function ModuleA(props) {
  return (
    <div>
      <Switch>
        <Route path='/pageA/main' component={PageA} />
        <Route path='/pageA/pageA1' component={PageA1} />
        <Route path='/pageA/pageA2' component={PageA2} />
      </Switch>
    </div>
  )
}
