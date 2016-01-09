import React from 'react';
import {Route} from 'react-router';

import './creator.css';

export default class CreatorComponent extends React.Component{
  static get route(){
    return (
      <Route path='creator' component={CreatorComponent}/>
    );
  }

  nameArrToStr(nameArr){
    let k = '';
    let len = nameArr.length;
    switch(len){
      case 0:
        break;
      case 1:
        k += nameArr[0];
        break;
      case 2:
        k += nameArr[0] + ' and ' + nameArr[1];
        break;
      default:
        for(let i=0; i < len-1; i++){
          k += nameArr[i] + ', ';
        }
        k += 'and ' + nameArr[len-1];
        break;
    }
    return k;
  }

  render(){
    let {names, startYear} = this.props;
    return <div className='creator-text'>
      created with &hearts; by {this.nameArrToStr(names)}<br/>
      &copy; {startYear} - {new Date().getFullYear()}
    </div>;
  }
}
