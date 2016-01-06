import React from 'react';

export default class HomeComponent extends React.Component {
  static get route(){
    return {
      path: '/home',
      component: HomeComponent,
      // indexRoute: {component: component},
      // childRoutes: []
    };
  }

  render(){
    return <div>
      <h1>HOME</h1>
      <p>hello this is the home view</p>
    </div>;
  }
}
