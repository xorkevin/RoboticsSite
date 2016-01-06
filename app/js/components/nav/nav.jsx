import React from 'react';
import {Route} from 'react-router';

export default class NavComponent extends React.Component {
  static get route(){
    return (
      <Route path='nav' component={NavComponent}/>
    );
  }

  render(){
    let {paths, logo} = this.props;
    return <div>
      This is the nav component.{/*needs to use props to configure*/}
    </div>;
  }
}
