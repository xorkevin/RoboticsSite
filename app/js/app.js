import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Views} from './views';

import {Components, Reducers} from './components';

import CONFIG from './config';

import './styles.css';

const {Creator} = Components;
const {Home} = Views;

const {creators, copyright} = CONFIG;

class App extends React.Component{
  static route(){
    return <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>;
  }

  render(){
    return <div className='app'>
      {this.props.children}
      <Creator names={creators} startYear={copyright}/>
    </div>;
  }
}


export {App, Reducers}
