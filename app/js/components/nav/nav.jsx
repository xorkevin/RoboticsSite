import React from 'react';
import {Route} from 'react-router';
import $ from 'jquery';

import './nav.css';

export default class NavComponent extends React.Component {
  static get route(){
    return (
      <Route path='nav' component={NavComponent}/>
    );
  }

  pathWrap(jsx, path, index){
    // if(index){
    //   return <IndexLinkContainer to={path}>{jsx}</IndexLinkContainer>;
    // } else {
    //   return <LinkContainer to={path}>{jsx}</LinkContainer>;
    // }
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

  render(){
    let {paths, logo} = this.props;
    return <nav className='navbar navbar-default navbar-fixed-top main-nav main-nav-fill-transparent'>
      <div className='container-fluid'>

        <div className='navbar-header'>
          <button className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse-1' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand'><img src='assets/MinimalLogoWeb.png' width='32px' height='32px'/></a>
        </div>

        <div className='collapse navbar-collapse' id='navbar-collapse-1'>
          <ul className='nav navbar-nav'>
            <li><a><h6>Home</h6></a></li>
            <li><a><h6>About</h6></a></li>
            <li><a><h6>Blog</h6></a></li>
            <li><a><h6>Photos</h6></a></li>
            <li><a><h6>Leadership</h6></a></li>
          </ul>

          <ul className='nav navbar-nav navbar-right'>
            <li><a><h6>Sponsors</h6></a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
