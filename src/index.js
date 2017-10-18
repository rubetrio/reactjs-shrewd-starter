import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import Home from './modules/homepage/Home'
import ModuleA from './modules/moduleA/route'
import ModuleB from './modules/moduleB/route'
import RootRouter from './RootRouter'
import routes from './route'
import { AppContainer } from 'react-hot-loader';

const renderApp = appRoutes => {``
  render(
    <AppContainer>
      <RootRouter routes={appRoutes} />
    </AppContainer>
    ,
    document.getElementById('element')
  )
}

renderApp(routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    renderApp(newRoutes)
  })
}
