import React from 'react';
import {Tabs, TabPanel} from '../../src/index.js';

class Demo1 extends React.Component {

  render() {
    return (
      <Tabs
        activeKey={1}
        direction="down"
        mode="slide"
      >
        <TabPanel name="选项卡1">
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

export default Demo1;
