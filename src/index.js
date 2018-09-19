import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import Spisok from './components/SpisokSotr'
import AddZap from './components/AddZap'
import Ssettings from './components/Ssettings'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Spisok} />
            <Route path='spisok' component={Spisok} />
            <Route path='addzap' component={AddZap} />
            <Route path='settings' component={Ssettings} />
        </Route>
    </Router>,
    document.getElementById('root')
)
registerServiceWorker()