import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {syncReduxAndRouter, routeReducer} from 'redux-simple-router';

import AppComponent from './components/app/app.jsx';
import reducers from './components/app/appreducer.jsx';


const reducer = combineReducers(Object.assign({}, ...reducers, {routing: routeReducer}));
const store = createStore(reducer);
const history = useRouterHistory(createHashHistory)({queryKey: false});
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {AppComponent.route}
    </Router>
  </Provider>,
  document.getElementById('app'));
