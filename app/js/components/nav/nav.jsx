import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {createSelector} from 'reselect';
import {pushPath} from 'redux-simple-router'
import $ from 'jquery';

import './nav.css';

class NavComponent extends React.Component {
  static get route(){
    return (
      <Route path='nav' component={NavComponent}/>
    );
  }

  static get listenID(){
    return 'navScrollEventListener'
  }

  componentDidMount() {
    $(window).on('scroll', this.listenID, this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    $(window).off('scroll', this.listenID);
  }

  handleScroll(event){
    let {navHeight} = this.props;
    if($(window).scrollTop() < navHeight){
      $('.main-nav').addClass('main-nav-fill-transparent').removeClass('main-nav-fill-regular');
    } else {
      $('.main-nav').addClass('main-nav-fill-regular').removeClass('main-nav-fill-transparent');
    }
  }

  dispatchPath(path){
    return(()=>{this.props.dispatch(pushPath(path))});
  }

  render(){
    // let {dispatch, routePath} = this.props; currently not used
    let {paths, pathsRight, logo} = this.props;

    return <div>
      <nav className='navbar navbar-default navbar-fixed-top main-nav main-nav-fill-transparent'>
        <div className='container-fluid'>

          <div className='navbar-header'>
            <button className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' onClick={this.dispatchPath(logo.path)}><img src={logo.img} width='32px' height='32px'/></a>
          </div>

          <div className='collapse navbar-collapse' id='navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              {paths.map((element)=>{
                return <li><a onClick={this.dispatchPath(element.path)}><h6>{element.title}</h6></a></li>
              })}
            </ul>

            <ul className='nav navbar-nav navbar-right'>
              <li><a><h6>Sponsors</h6></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>;
  }
}

const selectRoutePath = (state)=>{
  return state.routing.path;
};

const select = createSelector([selectRoutePath], (routePath)=>{
  return {
    routePath
  };
})

export default connect(select)(NavComponent)
