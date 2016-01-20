import React from 'react';
import {Route} from 'react-router';

import './header.css';

export default class HeaderComponent extends React.Component {
  static get route(){
    return (
      <Route path='header' component={HeaderComponent}/>
    );
  }

  render(){
    return <div className='main-header-background'>
      <div className='jumbotron reset-padding main-header-alpha'>
        <div className='main-header-nav-spacer'></div>
        <div className='main-header vcenter-parent'>
          <div className='container vcenter-child'>
            <div className='text-center main-header-text'>
              <img src='assets/MinimalLogoWeb.png' width='160px' height='160px'/>
              <img src='assets/PrototypeLogoWhite.png' height='200px'/>
              <h5>FRC Team 2854</h5>
              <h5 className='main-header-text-accent'>Evergreen Valley High School Robotics</h5>
              {(this.props.utilitySpace) || ''}
              <br/>
              <p><a className='btn btn-primary btn-lg'>Support us</a></p>
              <p>
                <a className='main-header-text-accent' href='https://www.facebook.com/evhsroboticteam2854'>
                  <i className='fa fa-facebook'></i>
                </a>
                <span>    </span>
                <a className='main-header-text-accent' href='https://github.com/EVHSRobotics' target='_blank'>
                  <i className='fa fa-github'></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
