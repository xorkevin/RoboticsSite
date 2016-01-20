import React from 'react';

import './headermin.css';

export default class HeaderMinComponent extends React.Component {
  render(){
    return <div className='min-header-background'>
      <div className='jumbotron reset-padding min-header-alpha'>
        <div className='min-header-nav-spacer'></div>
      </div>
    </div>;
  }
}
