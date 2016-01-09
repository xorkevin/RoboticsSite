import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import '../../../styles/bootstrapMdlUtil.css';

import NavComponent from '../nav/nav.jsx';
import CreatorComponent from '../creator/creator.jsx';
import FooterComponent from '../footer/footer.jsx';
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
    logo: {img: 'assets/MinimalLogoWeb.png', path: '/', index: true},
    navHeight: 256
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
      <NavComponent logo={config.logo} paths={config.paths} navHeight={config.navHeight}/>
      {this.props.children}
      <FooterComponent/>
      <CreatorComponent names={config.creators} startYear={config.startYear}/>
    </div>;
  }
}
