import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './modules/homepage/Home'
import ModuleA from './modules/moduleA/route.js'
import ModuleB from './modules/moduleB/route.js'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/pageA' component={ModuleA} />
      <Route path='/pageB' component={ModuleB} />
    </Switch>
  )
}

export default routes
