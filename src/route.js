import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingComponent from './modules/common/LoadingComponent'


const LoadableHome = Loadable({
  loader: () => import('./modules/homepage/Home'),
  loading: LoadingComponent
})

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
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route path='/pageA' component={LoadableModuleA} />
      <Route path='/pageB' component={LoadableModuleB} />
    </Switch>
  )
}

export default routes
