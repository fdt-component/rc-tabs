import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, TabPanel} from '../src/index.js';

class Demo1 extends React.Component {

  handleChange(idx) {
    console.log('点击',idx, '选项卡');
  }

  render() {
    return (
      <Tabs
        defaultActiveKey={0}
        onchange={this.handleChange}
      >
        <TabPanel name="选项卡1">
          选项卡1内容
        </TabPanel>

        <TabPanel name="选项卡2">
          选项卡2内容
        </TabPanel>
      </Tabs>
    );
  }
}

ReactDom.render((
  <Demo1/>
), document.getElementById('j-app'));
