import React from 'react';

class TabPanel extends React.Component {
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
  children: React.PropTypes.node,
  cn: React.PropTypes.string
};
module.exports = TabPanel;
