import React from 'react';

class Panel extends React.PureComponent {
  render() {
    return <div {...this.props}>{this.props.children}</div>;
  }
}

export default Panel;
