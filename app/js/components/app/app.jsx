import React from 'react';

import CreatorComponent from '../creator/creator.jsx';

export default class AppComponent extends React.Component{
  static get propTypes() {
    return {
      config: React.PropTypes.shape({
        creators: React.PropTypes.arrayOf(React.PropTypes.string)
      }).isRequired
    }
  }

  render() {
    return <div>
      Hello World!
      <CreatorComponent names={this.props.config.creators}/>
    </div>;
  }
}
