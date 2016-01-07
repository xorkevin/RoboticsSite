import React from 'react';
import {Route} from 'react-router';

export default class FooterComponent extends React.Component{
  static get route(){
    return (
      <Route path='footer' component={FooterComponent}/>
    );
  }

  render(){
    return <div className="container-fluid">
      <div className="well well-lg">
        <div className="text-center">
          <address>
            <h5>
              <strong>EVHS Robotics</strong>
            </h5>
            <h6>
              Evergreen Valley High School<br/>
              3300 Quimby Road<br/>
              San Jose CA 95148<br/>
              <br/>
              <a href="mailto:#">evhsrobotics2854@gmail.com</a>
            </h6>
          </address>
        </div>
      </div>
    </div>;
  }
}
