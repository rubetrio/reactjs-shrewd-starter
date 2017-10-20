import React from 'react'
import PageB from './PageB'
import { Switch,Route } from 'react-router-dom'

export default function RouteModuleB(props){
  return (
    <div>
      <Switch>
        <Route path='/pageB/main' component={PageB} />
      </Switch>
    </div>
  )
}
