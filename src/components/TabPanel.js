import React from 'react';

class TabPanel extends React.Component {
  render() {
    const {isActive = false, styles, children} = this.props;
    const cn = isActive ? `${styles.item} ${styles.active}` : `${styles.item}`;
    return (
      <div className={cn}>
        {children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  isActive: React.PropTypes.bool,
  children: React.PropTypes.node,
  styles: React.PropTypes.object
};
module.exports = TabPanel;
