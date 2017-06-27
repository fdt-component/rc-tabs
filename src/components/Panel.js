import React from 'react';
import PropTypes from 'prop-types';

class Panel extends React.Component {
  render() {
    return <div {...this.props}>{this.props.children}</div>;
  }
}
Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
