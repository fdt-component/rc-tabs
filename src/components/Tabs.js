import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable';
import cn from 'classnames/bind';
import ReactSwipe from 'react-swipe';
import Cursor from './Cursor';
import defaultStyles from './tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const {mergeStyles, activeKey} = this.props;
    this.state = {
      activeKey,
    };
    this.cx = cn.bind(this.initStyle(defaultStyles, mergeStyles));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({activeKey: nextProps.activeKey});
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.activeKey !== this.state.activeKey && this.swipe) {
      this.swipe.slide(nextState.activeKey);
    }
  }
  initStyle(styles, mergeStyles) {
    if(!!mergeStyles) {
      for(const prop in styles) {
        if(mergeStyles[prop]) {
          styles[prop] += ` ${mergeStyles[prop]}`;
        }
      }
    }
    return styles;
  }
  onTabClick = (activeKey) => {
    if(this.state.activeKey !== activeKey) {
      if (this.props.onChange) {
        this.props.onChange(activeKey);
      } else {
        this.setState({
          activeKey,
        });
      }
    }
  }
  renderTabList() {
    const {children} = this.props;
    const {activeKey} = this.state;
    return React.Children.map(children, (ele, idx) => (
      <Tappable
        className={this.cx('item', {active: activeKey === idx})}
        onTap={this.onTabClick.bind(this, idx)}
      >
        {ele.props.name}
      </Tappable>
    ));
  }

  renderTabPanel() {
    const {children} = this.props;
    const {activeKey} = this.state;
    return React.Children.map(children, (ele, idx) => {
      const eleProps = {
        cn: this.cx('panel', {active: activeKey === idx})
      };
      return (ele && React.cloneElement(ele, eleProps));
    });
  }

  render() {
    const tablist = this.renderTabList();
    const tabpanel = this.renderTabPanel();
    const {activeKey} = this.state;
    const {mode, children, direction} = this.props;
    return (
      <div className={this.cx('tab', {fade: mode === 'mode', slide: mode === 'slide', down: direction === 'down'})}>
        <div className={this.cx('tab-list')}>
          {tablist}
          <Cursor className={this.cx('cursor')} index={activeKey} len={children.length} />
        </div>
        <div className={this.cx('tab-panels')}>
          {
            mode === 'slide' ? (
              <ReactSwipe
                ref={swipe => (this.swipe = swipe)}
                style={{
                  container: {
                    height: '100%'
                  },
                  wrapper: {
                    height: '100%'
                  },
                }}
                swipeOptions={{
                  continuous: false,
                  startSlide: activeKey,
                  transitionEnd: this.onTabClick,
                }}
              >
                {tabpanel}
              </ReactSwipe>
            ) : tabpanel
          }
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  mode: 'fade',
  direction: 'up',
}

Tabs.propTypes = {
  children: PropTypes.node,
  defaultActiveKey: PropTypes.number,
  onChange: PropTypes.func,
  mergeStyles: PropTypes.object,
  mode: PropTypes.oneOf(['fade', 'slide']),
  direction: PropTypes.oneOf(['up', 'down']),
};

module.exports = Tabs;
