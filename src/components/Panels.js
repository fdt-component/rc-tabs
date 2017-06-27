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
      <div className={this.cn('panels', 'slide')}>
        {
          React.Children.map(children, (ele, idx) => {
            const isActive = activeKey === idx;
            if(showAll) {
              return (
                <div className={this.cn('panel', {active: isActive})}>
                  {ele}
                </div>
              );
            } else {
              return activeKey === idx ? (
                <div className={this.cn('panel', {active: isActive})}>
                  {ele}
                </div>
              ) : null;
            }
          })
        }
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
