import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {pushPath} from 'redux-simple-router'

import HeaderMinComponent from '../headermin/headermin.jsx';
import BlogHomeComponent from '../bloghome/bloghome.jsx';
import BlogContentComponent from '../blogcontent/blogcontent.jsx';

import './blog.css';

export default class BlogComponent extends React.Component {
  static get route(){
    return (
      <Route path='blog' component={BlogComponent}>
        <IndexRoute component={BlogHomeComponent}/>
        {BlogContentComponent.route}
      </Route>
    );
  }

  render(){
    return <div>
      <HeaderMinComponent/>
      <div className = "container">
        <div className="page-header">
          <h1>BLOGS</h1>
        </div>
      </div>

      {this.props.children}
    </div>;

  }
}
