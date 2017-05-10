import React from 'react';
import Tappable from 'react-tappable';
import cn from 'classnames/bind';
import ReactSwipe from 'react-swipe';
import Cursor from './Cursor';

class TabsBasic extends React.Component {
  constructor(props) {
    super(props);
    const {styles, activeKey} = this.props;
    this.state = {
      activeKey,
    };
    this.cx = cn.bind(styles);
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
  onTabClick = (activeKey) => {
    if(this.state.activeKey !== activeKey) {
      if (this.props.onchange) {
        this.props.onchange(activeKey);
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
    const tablist = React.Children.map(children, (ele, idx) => (
      <Tappable
        className={this.cx('item', {active: activeKey === idx})}
        onTap={this.onTabClick.bind(this, idx)}
      >
        {ele.props.name}
      </Tappable>
    ));
    return tablist;
  }

  renderTabPanel() {
    const {children, mode} = this.props;
    const {activeKey} = this.state;
    const pannelStyle = {};
    const tabpanel = React.Children.map(children, (ele, idx) => {
      const eleProps = {
        cn: this.cx('panel', {active: activeKey === idx})
      };
      return (ele && React.cloneElement(ele, eleProps));
    });
    return tabpanel;
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

TabsBasic.defaultProps = {
  mode: 'fade',
  direction: 'up',
}

TabsBasic.propTypes = {
  children: React.PropTypes.node,
  defaultActiveKey: React.PropTypes.number,
  onchange: React.PropTypes.func,
  styles: React.PropTypes.object,
  mode: React.PropTypes.oneOf(['fade', 'slide']),
  direction: React.PropTypes.oneOf(['up', 'down']),
};

module.exports = TabsBasic;
