import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/app/app.jsx';

let config = {
  creators: ['Kevin']
};

ReactDOM.render(<AppComponent config={config} />, document.getElementById('app'));
