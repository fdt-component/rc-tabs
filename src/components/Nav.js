import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable/lib/Tappable';
import classnames from 'classnames/bind';
import defaultStyles from './tabs.less';
import mergeSty from '../helper/index';

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    const {clean, mergeStyles} = this.props;
    this.styles = clean ? mergeStyles : mergeSty(defaultStyles, mergeStyles);
    this.cn = classnames.bind(this.styles);
  }

  onTabClick = activeKey => this.props.onChange && this.props.onChange(activeKey);

  render() {
    const {activeKey, items, noCursor} = this.props;
    const transform = `translateX(${activeKey * 100}%)`;
    return (
      <div className={this.cn('nav-wrap')}>
        {
          items.map((item, idx) => (
            <Tappable
              className={this.cn('nav', {active: activeKey === idx})}
              key={idx}
              onTap={this.onTabClick.bind(this, idx)}
            >
              {item}
            </Tappable>
          ))
        }
        {
          noCursor ? null : (
            <div
              className={this.cn('cursor-wrap')}
              style={{width: `${100 / items.length}%`, transform, WebkitTransform: transform}}
            >
              <div className={this.cn('cursor')}></div>
            </div>
          )
        }
      </div>
    );
  }
}

Nav.defaultProps = {
  activeKey: 0,
  clean: false,
  cursor: false
};

Nav.propTypes = {
  activeKey: PropTypes.number.isRequired,
  clean: PropTypes.bool,
  items: PropTypes.array.isRequired,
  mergeStyles: PropTypes.object,
  noCursor: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Nav;
