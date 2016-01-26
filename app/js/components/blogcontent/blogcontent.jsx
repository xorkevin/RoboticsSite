import {Route} from 'react-router';
import React from 'react';



export default class BlogContentComponent extends React.Component {
  static get route(){
    return (
      <Route path=':blogid' component={BlogContentComponent}/>
    );
  }

  render(){
    return <div>
      {this.props.routeParams.blogid}
    </div>;
  }
}
