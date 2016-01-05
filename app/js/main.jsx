import React from 'react';
import ReactDOM from 'react-dom';

import CreatorComponent from './components/creator.jsx';

let config = {
  creators: ['Kevin']
};

class MainComponent extends React.Component{
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

ReactDOM.render(<MainComponent config={config} />, document.getElementById('main'));
