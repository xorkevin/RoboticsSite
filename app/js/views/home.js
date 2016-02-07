import React from 'react';
import {Route} from 'react-router';

// import HeaderComponent from '../header/header.jsx';
//
// import CountdownComponent from '../countdown/countdown.jsx';


class Home extends React.Component {
  static route(){
    return <Route path='home' component={HomeComponent}/>;
  }

  render(){
    return <div>
      <div className="container">

        <div className="page-header" id="homeSection-about">
          <h1>WHO ARE WE?</h1>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h4>EVHS Robotics is located in San Jose, CA and is dedicated to inspiring students in their high school to discover and foster their passion for STEM through practical and hands on experience by competing in FIRST Robotics. </h4>
          </div>
        </div>

        <div className="page-header" id="homeSection-history">
          <h1>A BRIEF HISTORY</h1>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <p>The Robotics Club was established in 2009 by a group of friends who wanted to take their passion for designing and building to the next level by delving into the world of FIRST (For the Inspiration and Recognition of Science and Technology) Robotics. With limited resources and no experience whatsoever, the Prototypes tackled the challenge and took their robot to the Sacramento Regionals. Against all odds, the Prototypes were given the “Rookie Inspiration Award” and attained the highest rookie seed. The Prototypes experienced impediments throughout the years through rough transitions in leadership and lost knowledge. In 2013, the Prototypes were bestowed with the “Judge’s Award” due to their creative usage of materials under a limited budget. Now, the Prototypes continue to foster excellence by exposing their campus to the ingenuity of FIRST. In 2014, EVHS Robotics has expanded to competing in FTC to provide their newest members with greater opportunities for hands on learning, outlets to explore their interests, and opportunities to develop their skills to prepare for the innovation and determination required for FRC. There are now four FTC teams by the name of Omega, Athena, the Resistors, and G.O.A.T.s.</p>
          </div>
        </div>


        <div className="page-header" id="homeSection-photos">
          <h1>PHOTOS</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c2.staticflickr.com/6/5347/17193825111_7a74afb6d1_b.jpg" className="img-responsive"/>
          </div>
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c1.staticflickr.com/9/8815/17194347915_069357f10c_b.jpg" className="img-responsive"/>
          </div>
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c2.staticflickr.com/8/7607/17008121879_8ec3d84ce2_b.jpg" className="img-responsive"/>
          </div>
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c2.staticflickr.com/8/7618/16986806007_4fc72fd524_b.jpg" className="img-responsive"/>
          </div>
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c1.staticflickr.com/9/8725/17006625748_bc6be739fd_b.jpg" className="img-responsive"/>
          </div>
          <div className="col-sm-4 col-xs-6 card-row">
            <img src="https://c2.staticflickr.com/8/7689/17193649851_59dc3b2a1b_b.jpg" className="img-responsive"/>
          </div>
        </div>

        <div className="page-header" id="homeSection-sponsor">
          <h1>SPONSORS</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 card-row">
            <a href="http://www.lockheedmartin.com/" target="_blank">
              <img src="assets/Sponsors/LockheedMartin.jpg" className="img-responsive"/>
            </a>
          </div>
          <div className="col-sm-4 card-row">
            <a href="http://www.intuitivesurgical.com/" target="_blank">
              <img src="assets/Sponsors/IntuitiveSurgical.jpg" className="img-responsive"/>
            </a>
          </div>
          <div className="col-sm-4 card-row">
            <a href="https://www.qualcomm.com/" target="_blank">
              <img src="assets/Sponsors/Qualcomm.jpg" className="img-responsive"/>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2 card-row">
            <a href="http://www.venturesfoundation.org/" target="_blank">
              <img src="assets/Sponsors/pvfoundation.png" className="img-responsive"/>
            </a>
          </div>
          <div className="col-sm-4 card-row">
            <a href="http://www.walmart.com/" target="_blank">
              <img src="assets/Sponsors/Walmart.jpg" className="img-responsive"/>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="row card-row">
              <div className="col-md-10 col-md-offset-1">
                <div className="mdl-card mdl-shadow--4dp card-full-width card-height-resize">
                  <div className="mdl-card__supporting-text card-full-width card-text-black">
                    <h3>WANT TO SPONSOR US?</h3>
                    <p>
                      Shoot us an email at <code>evhsrobotics2854@gmail.com</code> and take a look at our <a href="https://drive.google.com/file/d/0B8U_7wjqYsu9djJmZ3kzR0VXNUU/view">sponsorship information</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="page-header" id="homeSection-leadership">
          <h1>THE OFFICERS</h1>
        </div>
        <div className="row">
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/aakash.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Aakash Parikh</h6>
              <p className="text-center">
                President
              </p>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/justin.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Justin Lin</h6>
              <p className="text-center">
                Vice President
              </p>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/kevin.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Kevin Wang</h6>
              <p className="text-center">
                Control Systems Lead
              </p>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/ammar.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Ammar Husain</h6>
              <p className="text-center">
                Mechanical Lead
              </p>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/jenna.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Jenna Wen</h6>
              <p className="text-center">
                Secretary
              </p>
            </div>
          </div>
          <div className="col-md-2 col-xs-4 card-row">
            <img src="assets/Officers/oliver.jpg" className="img-circle img-responsive"/>
            <div className="mdl-card__supporting-text card-full-width card-text-black">
              <h6 className="text-center">Oliver Yang</h6>
              <p className="text-center">
                Treasurer
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  }
}

export {Home};
