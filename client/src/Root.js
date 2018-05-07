
import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

import ContactsList from './components/ContactsList'
import Home from './components/Home'
// import LoginUser from './components/LoginUser'


const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
      <Route exact path="/" component={Home} />
       <Route exact path="/contacts" component={ContactsList} />
      {/* <Route exact path="/login_user" component={LoginUser} /> */}
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root