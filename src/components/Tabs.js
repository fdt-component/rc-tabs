import React from 'react';
import defaultStyles from './tabs.css';
import TabsBasic from './TabsBasic';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const {mergeStyles} = this.props;
    this.styles = mergeStyles && this.initStyle(mergeStyles) || defaultStyles;
  }

  initStyle(mergeStyles) {
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

  render() {
    const {children,onchange,defaultActiveKey, ...others} = this.props;
    return (
      <TabsBasic
        defaultActiveKey={defaultActiveKey}
        onchange={onchange}
        styles={this.styles}
        {...others}
      >
        {children}
      </TabsBasic>
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
