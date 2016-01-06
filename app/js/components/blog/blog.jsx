import React from 'react';

export default class BlogComponent extends React.Component {
  static get route(){
    return {
      path: '/blog',
      component: BlogComponent,
      // indexRoute: {component: component},
      // childRoutes: []
    };
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
