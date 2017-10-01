'use strict'

import './styles/main.scss'
import 'grommet/scss/vanilla/index.scss'
import './styles/font-awesome.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import MainContainer from './components/MainContainer.js'
import Chat from './components/Chat.jsx'
import NoModerator from './components/NoModerator.jsx'
import DuplicatedChat from './components/DuplicatedChat.jsx'
import HeaderContainer from './components/HeaderContainer.js'
import PreloginContainer from './components/PreloginContainer.js'
import RfqForm from './modules/rfq/RfqForm.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers/index'
import createSocketEmitterMiddleware from './middleware/socketEmitterMiddleware'
import createSocketListenerMiddleware from './middleware/socketListenerMiddleware'
import socketIO from 'socket.io-client'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './middleware/sagas.js'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { getParameterByName } from './util/QueryUtil.js'
import * as path from './constants/Path'

/*
URL to call,
https://chat.fundsupermart.com/chatV2?token=xxxxx&channel=2&appId=fsm&authAppId=fsm&funnel=[fsm_mobile/fsm2.0/fsm1.0/b2b1.0/igm/]
*/
console.log('Run this: http://localhost:3000/chatV2/?channelId=2&appId=fsm&authAppId=fsm&funnel=fsm2.0')

let token = getParameterByName('token',window.location.href)
let channelId = getParameterByName('channelId',window.location.href)
let appId = getParameterByName('appId',window.location.href)
let funnel = getParameterByName('funnel',window.location.href)
let authAppId = getParameterByName('authAppId',window.location.href)
let locale = getParameterByName('locale', window.location.href)
let country = getParameterByName('country', window.location.href)
let issueCode = getParameterByName('issueCode', window.location.href)
let navBar = getParameterByName('navBar', window.location.href)
let isMobile = getParameterByName('isMobile', window.location.href)

console.log('window location href: ', window.location.href)

//token = "eyJhbGciOiJIUzUxMiJ9.eyJjb3VudHJ5X2NvZGUiOiJTRyIsImlkIjoiODIwOTAzMDc1ODA5IiwiZXhwIjoxNDc2NTU4MDAwLCJpYXQiOjE0NzM5ODM2NDUsImp0aSI6IjE2MDkxNjA3NTQwNTk2MzY0OCJ9.ONPaPX1Fjl_ZJUtuZMegHap1D8NPTVZwyUnJDm6_1oGnY325t54wFVZgUtCAqPANHnI0XcWfX7MWC4rTNnE2Hw"
//console.log('token: ' + token)

let sessionToken = localStorage.getItem("session-token");
let email = localStorage.getItem("session-email");

let username =  getParameterByName('username',window.location.href)

if(email === undefined || email === null || email === '') {
  email = getParameterByName('email',window.location.href)
}

///chatV2/?username=QC&email=aa@ee.rr&channelId=2&appId=fsm&authAppId=fsm&funnel=fsm2.0

let queryStr = 'sessionToken=' + sessionToken + '&allowResume=Y&fsmUser=submitted&authAppId='+authAppId+'&username=' + username + '&email=' + email +'&token=' + token + '&issueCode='+issueCode+'&bondName=&locale='+locale+'&appId='+appId+'&channelId='+channelId+'&version=2&funnel='+funnel

console.log('queryStr: '+queryStr)

const query = {
  query: queryStr
}

console.log('process.env.NODE_ENV: '+process.env.NODE_ENV)

let hostUrl = ''
if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'trial'){
  hostUrl = 'http://localhost:4000/'
}

// For rfq - connect to trial
hostUrl = "https://shrewdchat-backend-dev.ap-southeast-1.elasticbeanstalk.com/";

const io = socketIO(hostUrl, query)

const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
  applyMiddleware(createSocketEmitterMiddleware(io), createSocketListenerMiddleware(io), sagaMiddleware, routeMiddleware)
)

export const store = createStore(
  rootReducers,
  enhancer
)

console.log(rootSaga)

sagaMiddleware.run(rootSaga)

let element = document.getElementById('content');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <HeaderContainer/>
        <Route exact path="/chatV2/" component={MainContainer}/>
        <Route path="/chatV2/chat" component={Chat}/>
        <Route path="/chatV2/rfq-form" component={RfqForm}/>
        <Route path="/chatV2/prelogin" component={PreloginContainer}/>
        <Route path="/chatV2/no-moderator" component={NoModerator}/>
        <Route path="/chatV2/duplicated-chat" component={DuplicatedChat}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('element')
)

document.body.classList.remove('loading');
