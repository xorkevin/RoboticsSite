import React from 'react';
import {Route} from 'react-router';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

export default class NavComponent extends React.Component {
  static get route(){
    return (
      <Route path='nav' component={NavComponent}/>
    );
  }

  static pathWrap(jsx, path, index){
    if(index){
      return <IndexLinkContainer to={path}>{jsx}</IndexLinkContainer>;
    } else {
      return <LinkContainer to={path}>{jsx}</LinkContainer>;
    }
  }

  render(){
    let {paths, logo} = this.props;
    return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {NavComponent.pathWrap(<img src={logo.img}/>, logo.path, logo.index)}
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
    </Navbar>;
  }
}
