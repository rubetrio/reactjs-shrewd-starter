import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './modules/homepage/Home'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/abc" component={Home} />
    </div>
  </BrowserRouter>
  ,
  document.getElementById('element')
)
