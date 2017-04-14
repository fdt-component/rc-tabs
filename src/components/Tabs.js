import React from 'react';
import Tappable from 'react-tappable';
import defaultStyles from './rctabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.initDefautActive(),
    };
    this.styles = this.initStyle();
  }

  initStyle() {
    const {mergeStyles} = this.props;
    const styles = defaultStyles;
    if(!!mergeStyles) {
      for(const prop in styles) {
        if(mergeStyles[prop]) {
          styles[prop] += ` ${mergeStyles[prop]}`;
        }
      }
    }
    return styles;
  }

  initDefautActive() {
    const {defaultActiveKey = null} = this.props;
    return !defaultActiveKey ? 0 : defaultActiveKey;
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

  getTabCname(curidx) {
    const {item, active} = this.styles;
    if(curidx === this.state.activeKey) {
      return `${item} ${active}`;
    } else {
      return `${item}`;
    }
  }

  getPanelCname(curIdx) {
    const {panel, active} = this.styles;
    if(curIdx === this.state.activeKey) {
      return `${panel} ${active}`;
    } else {
      return `${panel}`;
    }
  }

  renderTabList() {
    const {children} = this.props;
    const tablist = React.Children.map(children, (ele, idx) => (
      <Tappable
        className={this.getTabCname(idx)}
        key={idx}
        onTap={this.onTabClick.bind(this, idx)}
      >{ele.props.name}
      </Tappable>
    ));
    return tablist;
  }

  renderTabPanel() {
    const {children} = this.props;
    const tabpanel = React.Children.map(children, (ele,idx) => {
      const eleProps = {
        cn: this.getPanelCname(idx)
      };
      return (ele && React.cloneElement(ele, eleProps));
    });
    return tabpanel;
  }

  render() {
    const tablist = this.renderTabList();
    const tabpanel = this.renderTabPanel();
    const styles = this.styles;
    return (
      <div className={styles.tab}>
        <div className={styles['tab-list']}>
          {tablist}
        </div>
        <div className={styles['tab-panels']}>
          {tabpanel}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: React.PropTypes.node,
  defaultActiveKey: React.PropTypes.number,
  onchange: React.PropTypes.func,
  mergeStyles: React.PropTypes.object
};

module.exports = Tabs;
