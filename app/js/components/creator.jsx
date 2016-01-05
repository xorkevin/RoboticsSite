import React from 'react';

export default class CreatorComponent extends React.Component{
  static get propTypes() {
    return {
      names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    };
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
    console.log('hello');
    console.log(this.props.names);
    return (<div>
      created with &hearts; by {this.nameArrToStr(this.props.names)}
    </div>);
  }
}
