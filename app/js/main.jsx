import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import AppComponent from './components/app/app.jsx';

const propsConfig = {
  config: {
    creators: ['Kevin'],
    startYear: 2015
  }
};

ReactDOM.render(<Router history={browserHistory} routes={AppComponent.injectorRoute(propsConfig)} />, document.getElementById('app'));
