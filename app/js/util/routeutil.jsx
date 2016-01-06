import React from 'react';

let InjectProps = (component, props)=>{
  return React.createElement(component, props);
};

export default {InjectProps}
