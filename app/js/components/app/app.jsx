import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import NavComponent from '../nav/nav.jsx';
import CreatorComponent from '../creator/creator.jsx';
import DoesNotExistComponent from '../doesnotexist/doesnotexist.jsx';
import HomeComponent from '../home/home.jsx';
import BlogComponent from '../blog/blog.jsx';

const appProps = {
  config: {
    creators: ['Kevin'],
    startYear: 2015,
    paths: [
      {title: 'Home', path: '/', index: true},
      {title: 'Blog', path: '/blog'}
    ],
    logo: {img: 'assets/MinimalLogoWeb.png', path: '/', index: true}
  }
};

export default class AppComponent extends React.Component{
  static get route(){
    return (
      <Route path='/' component={AppComponent}>
        <IndexRoute component={HomeComponent}/>
        {BlogComponent.route}
        {DoesNotExistComponent.route}
        <Redirect from="*" to="404"/>
      </Route>
    );
  }

  render() {
    let {config} = appProps;
    return <div>
      <NavComponent logo={config.logo} paths={config.paths}/>
      {this.props.children}
      <CreatorComponent names={config.creators} startYear={config.startYear}/>
    </div>;
  }
}
