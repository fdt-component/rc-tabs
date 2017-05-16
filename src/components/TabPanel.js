import React from 'react';
import PropTypes from 'prop-types';

class TabPanel extends React.PureComponent {
  render() {
    const {cn, children} = this.props;
    return (
      <div className={cn}>
        {children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  cn: PropTypes.string
};

export default TabPanel;
