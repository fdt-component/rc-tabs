import React from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.less';
import classnames from 'classnames/bind';

class TabPanel extends React.PureComponent {
  cn = classnames.bind(styles);
  render() {
    const {isActive, children, canScroll} = this.props;
    return (
      <div className={this.cn('panel', {scroll: canScroll}, {active: isActive})}>
        {children}
      </div>
    );
  }
}

TabPanel.defaultProps = {
  canScroll: true
};

TabPanel.propTypes = {
  canScroll: PropTypes.bool,
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default TabPanel;
