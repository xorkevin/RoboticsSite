import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import AppComponent from './components/app/app.jsx';

ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
    {AppComponent.route}
  </Router>,
  document.getElementById('app'));
