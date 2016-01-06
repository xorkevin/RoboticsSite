import React from 'react';
import {Route} from 'react-router';

export default class BlogComponent extends React.Component {
  static get route(){
    return (
      <Route path='blog' component={BlogComponent}/>
    );
  }

  render(){
    return <div>
      <h1>BLOG</h1>
      <ul>
        <li>this</li>
        <li>is</li>
        <li>a</li>
        <li>list</li>
        <li>of</li>
        <li>blog</li>
        <li>posts</li>
      </ul>
    </div>;
  }
}
