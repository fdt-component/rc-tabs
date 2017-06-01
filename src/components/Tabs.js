import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable';
import classnames from 'classnames/bind';
import ReactSwipe from 'react-swipe';
import Cursor from './Cursor';
import defaultStyles from './tabs.less';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const {mergeStyles, activeKey=0} = this.props;
    this.state = {
      activeKey,
    };
    this.styles = this.initStyle(defaultStyles, mergeStyles);
    this.cn = classnames.bind(this.styles);
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
    const {clean} = this.props;
    if(!!mergeStyles) {
      if(clean) {
        return mergeStyles;
      } else {
        for(const prop in mergeStyles) {
          if(mergeStyles[prop]) {
            styles[prop] += ` ${mergeStyles[prop]}`;
          }
        }
      }
    }
    return styles;
  }

  onTabClick = activeKey => {
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
        className={this.cn('item', {active: activeKey === idx})}
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
        cn: this.cn('panel', {active: activeKey === idx})
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
      <div
        className={this.cn('tab', mode, direction)}
      >
        <div className={this.cn('tab-list')}>
          {tablist}
          <Cursor activeKey={activeKey} len={children.length} styles={this.styles}/>
        </div>
        <div className={this.cn('tab-panels')}>
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
  clean: false
};

Tabs.propTypes = {
  activeKey: PropTypes.number,
  children: PropTypes.node,
  clean: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down']),
  mergeStyles: PropTypes.object,
  mode: PropTypes.oneOf(['fade', 'slide']),
  onChange: PropTypes.func,
};

export default  Tabs;
