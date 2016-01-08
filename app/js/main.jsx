import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {syncReduxAndRouter, routeReducer} from 'react-simple-router';
// import reducers from '<reducers>';

import AppComponent from './components/app/app.jsx';


const reducer = combineReducers({/*app reducer file*/});
const store = createStore(reducer);
const history = createHashHistory({queryKey: false});
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={useRouterHistory(history)}>
      {AppComponent.route}
    </Router>
  </Provider>,
  document.getElementById('app'));

/*

Todo:

- navbar animation on scroll
- router with redux
- reduxify the app

*/
