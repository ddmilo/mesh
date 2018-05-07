import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'
import createHistory from 'history/createBrowserHistory'



const history = createHistory()
const store = configureStore(history)
console.log(store)

ReactDOM.render( <Provider store={store}>
    <App />
 </Provider>, document.getElementById('root'))
registerServiceWorker()
