import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Router, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import {createStore, combineReducers} from 'redux';
import {syncReduxAndRouter, routeReducer} from 'redux-simple-router';

import {App, Reducers} from './app';

const reducer = combineReducers(Object.assign({}, Reducers, {routing: routeReducer}));
const store = createStore(reducer);
const history = useRouterHistory(createHashHistory)({queryKey: false});
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {App.route()}
    </Router>
  </Provider>,
  document.getElementById('app'));
