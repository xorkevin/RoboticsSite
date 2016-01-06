import React from 'react';
import RouteUtil from '../../util/routeutil.jsx';

import CreatorComponent from '../creator/creator.jsx';
import HomeComponent from '../home/home.jsx';
import BlogComponent from '../blog/blog.jsx';

export default class AppComponent extends React.Component{
  static get propTypes() {
    return {
      config: React.PropTypes.shape({
        creators: React.PropTypes.arrayOf(React.PropTypes.string)
      }).isRequired
    }
  }

  static injectorRoute(props){
    return {
      path: '/',
      component: RouteUtil.InjectProps(AppComponent, props),
      indexRoute: {component: HomeComponent},
      childRoutes: [
        BlogComponent.route
      ]
    };
  }

  render() {
    return <div>

      {this.props.children}
      <CreatorComponent names={this.props.config.creators} startYear={this.props.config.startYear}/>
    </div>;
  }
}
