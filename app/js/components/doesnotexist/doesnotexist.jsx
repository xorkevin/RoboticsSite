import React from 'react';
import {Route} from 'react-router';

export default class DoesNotExistComponent extends React.Component{
  static get route(){
    return (
      <Route path='404' component={DoesNotExistComponent}/>
    );
  }

  render(){
    return <div>
      <h1>404</h1>
      <h4>Page does not exist.</h4>
    </div>;
  }
}
