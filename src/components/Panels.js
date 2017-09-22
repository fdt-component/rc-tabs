import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import defaultStyles from './tabs.less';
import mergeSty from '../helper/index.js';

class Panels extends React.PureComponent {
  constructor(props) {
    super(props);
    const {clean, mergeStyles} = this.props;
    this.styles = clean ? mergeStyles : mergeSty(defaultStyles, mergeStyles);
    this.cn = classnames.bind(this.styles);
  }

  render() {
    const {activeKey, children, showAll} = this.props;
    return (
      <div className={this.cn('panels')}>
        {
          showAll ? React.Children.map(children, (ele, idx) => (
            <div className={this.cn('panel', {active: activeKey === idx})}>
              {ele && React.cloneElement(ele)}
            </div>
          )) : (
            <div className={this.cn('panel', 'active')}>
              {children[activeKey] && React.cloneElement(children[activeKey])}
            </div>
          )
        }
        <input/>
      </div>
    );
  }
}

Panels.defaultProps = {
  activeKey: 0,
  clean: false,
  showAll: true,
};

Panels.propTypes = {
  activeKey: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  clean: PropTypes.bool,
  mergeStyles: PropTypes.object,
  showAll: PropTypes.bool,
};

export default Panels;
