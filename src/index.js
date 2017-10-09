import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './modules/homepage/Home'
import PageB from './modules/moduleB/PageB'
import PageA from './modules/moduleA/PageA'
import PageA1 from './modules/moduleA/PageA1'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/pageA' component={PageA} />
        <Route path='/pageAB/pageA1' component={PageA1} />
        <Route path="/pageB" component={PageB} />
      </Switch>
    </div>
  </BrowserRouter>
  ,
  document.getElementById('element')
)
