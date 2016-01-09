import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

export default class CountdownComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timeUntil: '0 | 00 : 00 : 00'
    };
  }

  componentDidMount(){
    this.endMoment = moment(this.props.endTime);
    this.timer = window.setInterval(this.tick.bind(this), this.props.interval);
  }

  componentWillUnmount(){
    window.clearInterval(this.timer);
  }

  tick(){
    this.setState(Object.assign({}, this.state, {timeUntil: moment.duration(this.endMoment.diff(moment())).format(this.props.format)}));
  }

  render(){
    return <span>{this.state.timeUntil}</span>;
  }
}
