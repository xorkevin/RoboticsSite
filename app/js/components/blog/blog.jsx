import React from 'react';
import {Route} from 'react-router';

import HeaderMinComponent from '../headermin/headermin.jsx';

import './blog.css';

export default class BlogComponent extends React.Component {
  static get route(){
    return (
      <Route path='blog' component={BlogComponent}/>
    );
  }

  render(){
    return <div>
      <HeaderMinComponent/>
      <div className = "container">
        <div className="page-header">
          <h1>BLOGS</h1>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="card-row col-sm-8 col-sm-offset-2">
                <div id="blog-background-p" className="blog-listcard-back">
                  <div className="blog-listcard-alpha">
                    <a>
                      <div className="blog-listcard vcenter-parent">
                        <div className="blog-listcard-content vcenter-child text-center">
                          <h3>Prototypes</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="card-row col-sm-8 col-sm-offset-2">
                <div id="blog-background-p" className="blog-listcard-back">
                  <div className="blog-listcard-alpha">
                    <a>
                      <div className="blog-listcard vcenter-parent">
                        <div className="blog-listcard-content vcenter-child text-center">
                          <h3>Prototypes</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="card-row col-sm-8 col-sm-offset-2">
                <div id="blog-background-p" className="blog-listcard-back">
                  <div className="blog-listcard-alpha">
                    <a>
                      <div className="blog-listcard vcenter-parent">
                        <div className="blog-listcard-content vcenter-child text-center">
                          <h3>Prototypes</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="card-row col-sm-8 col-sm-offset-2">
                <div id="blog-background-p" className="blog-listcard-back">
                  <div className="blog-listcard-alpha">
                    <a>
                      <div className="blog-listcard vcenter-parent">
                        <div className="blog-listcard-content vcenter-child text-center">
                          <h3>Prototypes</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;

  }
}
