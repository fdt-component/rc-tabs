import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, TabPanel} from '../src/index.js';

class Demo1 extends React.Component {

  render() {
    return (
      <Tabs
        activeKey={1}
        mode="slide"
        direction="down"
      >
        <TabPanel name="选项卡1">
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>

          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>

          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>

          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
          <div>选项卡1内容</div>
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
