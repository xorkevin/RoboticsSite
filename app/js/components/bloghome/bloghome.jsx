import {Route} from 'react-router';
import React from 'react';
import {connect} from 'react-redux';
import {pushPath} from 'redux-simple-router';
import {createSelector} from 'reselect';

import './bloghome.css';
import BlogContentComponent from '../blogcontent/blogcontent.jsx';


class BlogHomeComponent extends React.Component {
  static get route(){
    return (
      <Route path='bloghome' component={BlogHomeComponent}/>
    );
  }

  dispatchPath(path){
    return(()=>{this.props.dispatch(pushPath(path))});
  }

  render(){
    return <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="row">
          <div className="card-row col-sm-8 col-sm-offset-2">
            <div id="blog-background-p" className="blog-listcard-back">
              <div className="blog-listcard-alpha">
                <a onClick={this.dispatchPath('/blog/protoblog')}>
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

export default connect(select)(BlogHomeComponent)
