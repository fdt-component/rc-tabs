import React from 'react';
import Tappable from 'react-tappable';
import defaultStyles from './tab.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const {tabStaticStyle, tabActiveStyle, tabHeight, styles} = this.props;
    this.state = {
      activeKey: this.initDefautActive(),
    };
    this.style = {
      styles,
      tabStaticStyle,
      tabActiveStyle,
      tabHeight: {
        lineHeight: tabHeight
      },
      contentHeight: {
        height: `calc(100% - ${tabHeight})`
      }
    };
  }

  initDefautActive() {
    const {children, defaultActiveKey = null} = this.props;
    return !defaultActiveKey ? children[0].key: defaultActiveKey;
  }

  onTabClick(activeKey) {
    const self = this;
    if(this.state.activeKey !== activeKey) {
      this.setState({
        activeKey,
      },() => {
        self.props.onchange && self.props.onchange(activeKey);
      });
    }
  }

  getTabStyle(activeKey) {
    const {tabActiveStyle, tabStaticStyle} = this.style;
    if(activeKey === this.state.activeKey) {
      return tabActiveStyle;
    } else {
      return tabStaticStyle;
    }
  }

  renderTabList() {
    const {children} = this.props;
    const {styles} = this.style;
    const tablist = React.Children.map(children, (ele, idx) => (
      <Tappable
        className={styles.item}
        key={idx}
        onTap={this.onTabClick.bind(this,ele.key)}
        style={this.getTabStyle(ele.key)}
      >{ele.props.name}
      </Tappable>
    ));
    return tablist;
  }

  renderTabPanel() {
    const {children} = this.props;
    const {activeKey} = this.state;
    const {styles} = this.style;
    const tabpanel = React.Children.map(children, ele => {
      const eleProps = {
        styles,
        isActive: ele.key === activeKey
      };
      return (ele && React.cloneElement(ele, eleProps));
    });
    return tabpanel;
  }

  render() {
    const tablist = this.renderTabList();
    const tabpanel = this.renderTabPanel();
    const {styles, tabHeight, contentHeight} = this.style;
    return (
      <div className={styles.tab}>
        <div
          className={styles['tab-list']}
          style={tabHeight}
        >{tablist}</div>
        <div
          className={styles['tab-content']}
          style={contentHeight}
        >{tabpanel}</div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  styles: defaultStyles,
  tabHeight: '45px',
  tabStaticStyle: {
    color: '#333',
    borderBottom: '1px solid #333'
  },
  tabActiveStyle: {
    color: 'red',
    borderBottom: '3px solid red'
  }
};

Tabs.propTypes = {
  children: React.PropTypes.node,
  defaultActiveKey: React.PropTypes.string,
  onchange: React.PropTypes.func,
  tabHeight: React.PropTypes.string,
  tabStaticStyle: React.PropTypes.object,
  tabActiveStyle: React.PropTypes.object,
  styles: React.PropTypes.object
};

module.exports = Tabs;
