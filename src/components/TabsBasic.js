import React from 'react';
import Tappable from 'react-tappable';
import cn from 'classnames/bind';

class TabsBasic extends React.Component {
  constructor(props) {
    super(props);
    const {styles, defaultActiveKey = 0} = this.props;
    this.state = {
      activeKey: defaultActiveKey
    };
    this.cx = cn.bind(styles);
  }

  onTabClick(curIdx) {
    const self = this;
    if(this.state.activeKey !== curIdx) {
      this.setState({
        activeKey: curIdx,
      },() => {
        self.props.onchange && self.props.onchange(curIdx);
      });
    }
  }

  renderTabList() {
    const {children} = this.props;
    const {activeKey} = this.state;
    const tablist = React.Children.map(children, (ele, idx) => (
      <Tappable
        className={this.cx('item', {active: activeKey === idx})}
        onTap={this.onTabClick.bind(this, idx)}
      >{ele.props.name}
      </Tappable>
    ));
    return tablist;
  }

  renderTabPanel() {
    const {children} = this.props;
    const {activeKey} = this.state;
    const tabpanel = React.Children.map(children, (ele,idx) => {
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
    return (
      <div className={this.cx('tab')}>
        <div className={this.cx('tab-list')}>
          {tablist}
        </div>
        <div className={this.cx('tab-panels')}>
          {tabpanel}
        </div>
      </div>
    );
  }
}

TabsBasic.propTypes = {
  children: React.PropTypes.node,
  defaultActiveKey: React.PropTypes.number,
  onchange: React.PropTypes.func,
  styles: React.PropTypes.object
};

module.exports = TabsBasic;
