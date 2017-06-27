import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable/lib/Tappable';
import classnames from 'classnames/bind';
import defaultStyles from './tabs.less';
import mergeSty from '../helper/index';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    const {clean, mergeStyles} = this.props;
    this.styles = clean ? mergeStyles : mergeSty(defaultStyles, mergeStyles);
    this.cn = classnames.bind(this.styles);
  }

  onTabClick = activeKey => {
    this.props.activeKey !== activeKey && this.props.onChange(activeKey);
  }

  render() {
    const {activeKey, items} = this.props;
    const transform = `translateX(${activeKey * 100}%)`;
    return (
      <div className={this.cn('tabs')}>
        {
          items.map((item, idx) => (
            <Tappable
              className={this.cn('tab', {active: activeKey === idx})}
              key={idx}
              onTap={this.onTabClick.bind(this, idx)}
            >
              {item}
            </Tappable>
          ))
        }
        <div
          className={this.cn('cursor-wrap')}
          style={{width: `${100 / items.length}%`, transform, WebkitTransform: transform}}
        >
          <div className={this.cn('cursor')}></div>
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  activeKey: 0,
  clean: false
};

Tabs.propTypes = {
  activeKey: PropTypes.number.isRequired,
  clean: PropTypes.bool,
  items: PropTypes.array.isRequired,
  mergeStyles: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
