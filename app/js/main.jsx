import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import AppComponent from './components/app/app.jsx';

ReactDOM.render(
  <Router history={createHistory({queryKey: false})}>
    {AppComponent.route}
  </Router>,
  document.getElementById('app'));
