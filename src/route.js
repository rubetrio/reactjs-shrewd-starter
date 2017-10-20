import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingComponent from './modules/common/LoadingComponent'
import { Link } from 'react-router-dom'
import PageA1 from './modules/moduleA/PageA1'
import PageA2 from './modules/moduleA/PageA2'
import LeftBar from './modules/common/LeftBar'

export const LoadableModuleA = Loadable({
  loader: () => import('./modules/moduleA/routeA'),
  loading: LoadingComponent
})

export const LoadableModuleB = Loadable({
  loader: () => import('./modules/moduleB/routeB'),
  loading: LoadingComponent
})

const routes = () => {
  return (
    <div className='container'>
      <LeftBar />
      <div className='main'>
        <Route path='/pageA' component={LoadableModuleA} />
        <Route path='/pageB' component={LoadableModuleB} />
      </div>
      <div className='sidebar-right'>
      </div>
    </div>
  )
}

export default routes
