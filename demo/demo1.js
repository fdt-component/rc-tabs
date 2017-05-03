import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, TabPanel} from '../src/index.js';

class Demo1 extends React.Component {

  handleChange(key) {
    console.log('点击',key+1, '选项卡');
  }

  render() {
    return (
      <Tabs
        defaultActiveKey="SC"
        onchange={this.handleChange}
      >
        <TabPanel key="SC" name="选项卡1">
          选项卡1内容
        </TabPanel>
        <TabPanel name="选项卡2">
          选项卡2内容
        </TabPanel>
        <TabPanel name="选项卡3">
          选项卡3内容
        </TabPanel>
      </Tabs>
    );
  }
}

ReactDom.render((
  <Demo1/>
), document.getElementById('j-app'));
