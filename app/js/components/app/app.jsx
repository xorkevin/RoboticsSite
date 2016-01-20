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
    creators: ['Kevin', 'Cathleen', 'Joanne'],
    startYear: 2015,
    paths: [
      {title: 'Home', path: '/'},
      {title: 'Blog', path: '/blog'}
    ],
    pathsRight: [

    ],
    logo: {img: 'assets/MinimalLogoWeb.png', path: '/'},
    navHeight: 64
  },
  countdown: {
    message: 'End of Season',
    endTime: '2016-02-23T23:59:59-08:00',
    format: 'DD | HH : mm : ss',
    interval: 500 //in ms
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
