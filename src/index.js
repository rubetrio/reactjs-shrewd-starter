import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './modules/homepage/Home'
import ModuleA from './modules/moduleA/route.js'
import ModuleB from './modules/moduleB/route.js'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/pageA' component={ModuleA} />
        <Route path='/pageB' component={ModuleB} />
      </Switch>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('element')
)
